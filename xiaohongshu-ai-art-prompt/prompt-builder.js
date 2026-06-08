/**
 * 🎨 Xiaohongshu AI Art Prompt Builder v1.0
 * 
 * A powerful prompt construction system for creating high-quality AI art prompts
 * optimized for platforms like Midjourney, Stable Diffusion, DALL-E 3, and more.
 * 
 * @author Xiaohongshu AI Art Master
 * @version 1.0.0
 * @license MIT
 */

class PromptBuilder {
  constructor() {
    this.prompt = {
      style: null,
      subject: [],
      environment: [],
      lighting: [],
      composition: [],
      materials: [],
      colors: [],
      mood: [],
      techParams: {},
      negativePrompts: [],
      metadata: {}
    };
    
    // Load knowledge base from external JSON if available
    this.kb = null;
    this._init();
  }

  /**
   * Initialize the builder with knowledge base
   */
  _init() {
    try {
      const fs = require('fs');
      const path = require('path');
      
      // Try to load knowledge base
      const kbPath = path.join(__dirname, 'knowledge-base.json');
      if (fs.existsSync(kbPath)) {
        this.kb = JSON.parse(fs.readFileSync(kbPath, 'utf8'));
        console.log('✓ Knowledge base loaded successfully');
      } else {
        console.log('⚠ Knowledge base not found, using default templates');
      }
    } catch (err) {
      // Running in browser or KB not accessible
      console.log('ℹ Running in demo mode without full knowledge base');
    }
  }

  /**
   * Set the overall style category
   * @param {string} style - Style category: photography|illustration|3d-render|ui-design|custom
   * @returns {PromptBuilder} Self for chaining
   */
  setStyle(style) {
    this.prompt.style = style.toLowerCase();
    return this;
  }

  /**
   * Add main subject description
   * @param {string} description - Subject description
   * @param {object} options - Optional modifiers
   * @returns {PromptBuilder} Self for chaining
   */
  addSubject(description, options = {}) {
    this.prompt.subject.push({
      text: description,
      importance: options.importance || 'primary',
      details: options.details || []
    });
    return this;
  }

  /**
   * Add environment/background setting
   * @param {string} environment - Environment description
   * @returns {PromptBuilder} Self for chaining
   */
  addEnvironment(environment) {
    this.prompt.environment.push(environment);
    return this;
  }

  /**
   * Apply lighting technique(s)
   * @param {...string} lightingTechniques - One or more lighting types
   * @returns {PromptBuilder} Self for chaining
   */
  applyLighting(...lightingTechniques) {
    lightingTechniques.forEach(technique => {
      this.prompt.lighting.push(this._normalizeKeyword(technique, 'lighting'));
    });
    return this;
  }

  /**
   * Set composition/framing approach
   * @param {string} composition - Composition technique
   * @returns {PromptBuilder} Self for chaining
   */
  setComposition(composition) {
    this.prompt.composition.push(this._normalizeKeyword(composition, 'composition'));
    return this;
  }

  /**
   * Add material texture descriptions
   * @param {...string} materials - Material descriptions
   * @returns {PromptBuilder} Self for chaining
   */
  addMaterials(...materials) {
    materials.forEach(material => {
      this.prompt.materials.push(this._normalizeKeyword(material, 'materials'));
    });
    return this;
  }

  /**
   * Set color palette scheme
   * @param {string} palette - Color palette name
   * @returns {PromptBuilder} Self for chaining
   */
  setColorPalette(palette) {
    this.prompt.colors.push(this._normalizeKeyword(palette, 'color-palette'));
    return this;
  }

  /**
   * Define emotional mood/atmosphere
   * @param {...string} moods - Mood keywords
   * @returns {PromptBuilder} Self for chaining
   */
  setMood(...moods) {
    moods.forEach(mood => {
      this.prompt.mood.push(this._normalizeKeyword(mood, 'mood-words'));
    });
    return this;
  }

  /**
   * Add technical parameters
   * @param {object} params - Technical parameter object
   * @returns {PromptBuilder} Self for chaining
   */
  addTechParams(params) {
    Object.assign(this.prompt.techParams, params);
    return this;
  }

  /**
   * Set negative prompts (what to exclude)
   * @param {string|array} negatives - Single string or array of negative prompts
   * @returns {PromptBuilder} Self for chaining
   */
  setNegativePrompts(negatives) {
    if (Array.isArray(negatives)) {
      this.prompt.negativePrompts = [...this.prompt.negativePrompts, ...negatives];
    } else {
      this.prompt.negativePrompts.push(negatives);
    }
    return this;
  }

  /**
   * Add custom keyword from knowledge base
   * @param {string} category - KB category
   * @param {string} keyword - Keyword identifier
   * @returns {PromptBuilder} Self for chaining
   */
  useKBKeyword(category, keyword) {
    if (this.kb && this.kb[category]) {
      const item = this.kb[category].find(k => k.name === keyword || k.id === keyword);
      if (item) {
        this._addPromptText(item.prompt);
      }
    }
    return this;
  }

  /**
   * Use predefined template from knowledge base
   * @param {string} templateId - Template identifier
   * @param {object} variables - Variable substitutions
   * @returns {PromptBuilder} Self for chaining
   */
  useTemplate(templateId, variables = {}) {
    if (this.kb && this.kb['scene-templates']) {
      // Search all categories for template
      for (const category in this.kb['scene-templates']) {
        const templates = this.kb['scene-templates'][category];
        const template = templates.find(t => t.id === templateId);
        
        if (template) {
          // Replace placeholders
          let filledTemplate = template.template;
          Object.keys(variables).forEach(key => {
            filledTemplate = filledTemplate.replace(`{${key}}`, variables[key]);
          });
          
          this._buildFromTemplate(filledTemplate);
          break;
        }
      }
    }
    return this;
  }

  /**
   * Build final prompt string
   * @param {object} options - Build options
   * @returns {string} Final prompt
   */
  build(options = {}) {
    const parts = [];
    
    // 1. Main subject (highest priority)
    if (this.prompt.subject.length > 0) {
      const subjects = this.prompt.subject
        .sort((a, b) => (b.importance === 'primary' ? 1 : -1))
        .map(s => s.text);
      parts.push(subjects.join(', '));
    }
    
    // 2. Environment/setting
    if (this.prompt.environment.length > 0) {
      parts.push(this.prompt.environment.join(', '));
    }
    
    // 3. Style specification
    if (this.prompt.style) {
      parts.push(this._getStyleDescription(this.prompt.style));
    }
    
    // 4. Lighting
    if (this.prompt.lighting.length > 0) {
      parts.push(this.prompt.lighting.join(', '));
    }
    
    // 5. Composition
    if (this.prompt.composition.length > 0) {
      parts.push(this.prompt.composition.join(', '));
    }
    
    // 6. Materials & textures
    if (this.prompt.materials.length > 0) {
      parts.push(this.prompt.materials.join(', '));
    }
    
    // 7. Color palette
    if (this.prompt.colors.length > 0) {
      parts.push(this.prompt.colors.join(', '));
    }
    
    // 8. Mood/Atmosphere
    if (this.prompt.mood.length > 0) {
      parts.push(this.prompt.mood.join(', '));
    }
    
    // 9. Technical parameters as suffix
    let paramsString = '';
    if (Object.keys(this.prompt.techParams).length > 0) {
      paramsString = this._formatTechParams(this.prompt.techParams);
    }
    
    // Assemble final prompt
    let finalPrompt = parts.filter(Boolean).join(', ');
    
    // Add negative prompts if specified
    if (this.prompt.negativePrompts.length > 0 && options.includeNegative !== false) {
      const negativePart = ` --negative: ${this.prompt.negativePrompts.join(', ')}`;
      finalPrompt += negativePart;
    }
    
    // Add parameters
    if (paramsString) {
      finalPrompt += ` ${paramsString}`;
    }
    
    // Platform-specific optimizations for Xiaohongshu
    if (options.platform === 'xiaohongshu') {
      finalPrompt = this._optimizeForXiaohongshu(finalPrompt, options);
    }
    
    return finalPrompt.trim();
  }

  /**
   * Build for specific platform
   * @param {string} platform - Target platform
   * @param {object} options - Platform-specific options
   * @returns {object} Platform-specific prompt structure
   */
  buildForPlatform(platform, options = {}) {
    const basePrompt = this.build({ ...options, platform });
    
    switch (platform) {
      case 'midjourney':
        return this._buildMidjourney(basePrompt, options);
      case 'stable-diffusion':
        return this._buildStableDiffusion(basePrompt, options);
      case 'dall-e-3':
        return this._buildDALLE3(basePrompt, options);
      case 'leonardo':
        return this._buildLeonardo(basePrompt, options);
      case 'niji':
        return this._buildNiji(basePrompt, options);
      default:
        return {
          positive: basePrompt,
          platform: 'general'
        };
    }
  }

  /**
   * Export prompt as JSON structure
   * @returns {object} Structured prompt data
   */
  toJSON() {
    return {
      ...this.prompt,
      preview: this.build(),
      generatedAt: new Date().toISOString()
    };
  }

  /**
   * Reset builder state
   */
  reset() {
    this.prompt = {
      style: null,
      subject: [],
      environment: [],
      lighting: [],
      composition: [],
      materials: [],
      colors: [],
      mood: [],
      techParams: {},
      negativePrompts: [],
      metadata: {}
    };
    return this;
  }

  // ==================== PRIVATE METHODS ====================

  _normalizeKeyword(keyword, category) {
    if (!this.kb || !this.kb[category]) return keyword;
    
    // Search for exact match
    const match = this.kb[category].find(item => 
      item.name === keyword || 
      item.id === keyword ||
      item.zh === keyword ||
      item.term === keyword ||
      item.engine === keyword ||
      item.movement === keyword ||
      item.material === keyword ||
      item.emotion === keyword ||
      item.time === keyword
    );
    
    return match ? match.prompt || match.zh || keyword : keyword;
  }

  _addPromptText(text) {
    // Smart distribution based on context (could be enhanced)
    if (this.prompt.lighting.length === 0 && /light/i.test(text)) {
      this.prompt.lighting.push(text);
    } else if (this.prompt.materials.length === 0 && /texture|material|surface/i.test(text)) {
      this.prompt.materials.push(text);
    } else {
      // Default to adding as additional descriptor
      // This could be improved with NLP
    }
  }

  _buildFromTemplate(template) {
    // Parse template and distribute components
    const parts = template.split(/,\s*/);
    
    parts.forEach(part => {
      part = part.trim();
      if (/light|illumination|glow/.test(part)) {
        this.prompt.lighting.push(part);
      } else if (/texture|surface|material|fabric|wood|metal/.test(part)) {
        this.prompt.materials.push(part);
      } else if (/style|art|painting|photo/.test(part)) {
        this.prompt.style = this._inferStyleFromText(part);
      } else {
        this.prompt.environment.push(part);
      }
    });
  }

  _inferStyleFromText(text) {
    const styleMap = {
      'photography|photo|shot': 'photography',
      'painting|oil|watercolor|illustration': 'illustration',
      'render|3d|CGI|digital art': '3d-render',
      'design|ui|vector|graphic': 'ui-design',
      'anime|manga|cartoon|comic': 'illustration', // Specialized for Niji
      'sketch|drawing|pencil': 'illustration'
    };

    for (const [patterns, style] of Object.entries(styleMap)) {
      if (new RegExp(patterns, 'i').test(text)) {
        return style;
      }
    }
    return 'custom';
  }

  _getStyleDescription(style) {
    const styleDescriptions = {
      photography: 'professional photography',
      illustration: 'digital illustration',
      '3d-render': '3D render CG',
      'ui-design': 'UI design vector',
      custom: ''
    };
    return styleDescriptions[style] || '';
  }

  _formatTechParams(params) {
    const parts = [];
    
    // Aspect ratio
    if (params.ratio || params.ar) {
      const ratio = params.ratio || params.ar;
      parts.push(`--ar ${ratio}`);
    }
    
    // Version
    if (params.version) {
      if (params.version.includes('mj') || params.version.startsWith('v')) {
        parts.push(`--v ${params.version.replace('v', '')}`);
      } else {
        parts.push(`--version ${params.version}`);
      }
    }
    
    // Stylize
    if (params.stylize !== undefined) {
      parts.push(`--stylize ${params.stylize}`);
    }
    
    // Quality
    if (params.quality) {
      parts.push(`--q ${params.quality}`);
    }
    
    // Chaos
    if (params.chaos !== undefined) {
      parts.push(`--chaos ${params.chaos}`);
    }
    
    // Weird
    if (params.weird !== undefined) {
      parts.push(`--weird ${params.weird}`);
    }
    
    // Tile
    if (params.tile) {
      parts.push('--tile');
    }
    
    // NW (No Web)
    if (params.noWeb) {
      parts.push('--no-web');
    }
    
    // WS (Weird)
    if (params.ws !== undefined) {
      parts.push(`--ws ${params.ws}`);
    }
    
    return parts.join(' ');
  }

  _optimizeForXiaohongshu(prompt, options) {
    // Xiaohongshu-specific optimizations
    
    // 1. Ensure vertical aspect ratio (preferred 9:16 or 4:5)
    if (!prompt.includes('--ar') && !prompt.includes('--aspect')) {
      const preferredRatio = options.vertical ? '9:16' : '4:5';
      prompt += ` --ar ${preferredRatio}`;
    }
    
    // 2. Boost stylization for visual impact
    if (!prompt.includes('--stylize') && !prompt.includes('--s ')) {
      prompt += ' --stylize 300';
    }
    
    // 3. Emphasize human subjects for higher engagement
    const humanIndicators = ['woman', 'man', 'girl', 'boy', 'person', 'female', 'male', 'people'];
    if (humanIndicators.some(ind => prompt.toLowerCase().includes(ind))) {
      if (!prompt.match(/face|portrait|close-up|eyes/)) {
        // Add emphasis on facial features
        prompt = prompt.replace(/^(.+?),\s*(.+)$/, '$1, detailed face expression, sharp eyes, $2');
      }
    }
    
    // 4. Enhance lighting keywords for brightness (Xiaohongshu users prefer bright images)
    if (!prompt.match(/bright|well-lit|soft light|natural light/)) {
      prompt += ', bright well-lit scene';
    }
    
    return prompt;
  }

  _buildMidjourney(prompt, options) {
    const params = {
      ar: options.aspectRatio || '9:16', // Xiaohongshu prefers vertical
      version: options.version || '6.0',
      stylize: options.stylize || 300,
      quality: options.quality || '1',
      tile: options.tile || false,
      chaos: options.chaos || 10,
      weird: options.weird || 0
    };
    
    const paramStr = this._formatTechParams(params);
    
    return {
      prompt: `${prompt} ${paramStr}`,
      platform: 'midjourney',
      version: `--v ${params.version}`,
      recommendedSettings: {
        aspectRatio: params.ar,
        stylize: params.stylize,
        note: 'For best results on Xiaohongshu, use --ar 9:16 for fullscreen coverage'
      }
    };
  }

  _buildStableDiffusion(prompt, options) {
    const sdParams = {
      steps: options.steps || 30,
      cfg: options.cfg || 7.5,
      sampler: options.sampler || 'Euler a',
      size: this._parseAspectRatio(options.aspectRatio || '9:16'),
      negative: this.prompt.negativePrompts.length > 0 
        ? this.prompt.negativePrompts.join(', ')
        : 'deformed, distorted, disfigured, poorly drawn, bad anatomy, extra limbs, blurry, low quality, watermark, signature, text, logo'
    };
    
    // For SD, we need separate positive and negative prompts
    return {
      positive: prompt,
      negative: sdParams.negative,
      parameters: {
        steps: sdParams.steps,
        cfg_scale: sdParams.cfg,
        sampler: sdParams.sampler,
        dimensions: `${sdParams.size.width}x${sdParams.height}`
      },
      platform: 'stable-diffusion',
      modelRecommendations: [
        'SDXL Base 1.0 for general purpose',
        'DreamShaper XL for artistic styles',
        'Realistic Vision for photorealism',
        'Counterfeit XL for vibrant colors'
      ]
    };
  }

  _buildDALLE3(prompt, options) {
    // DALL-E 3 prefers natural language and longer descriptions
    const naturalLanguage = this._convertToNaturalLanguage(prompt);
    
    return {
      prompt: naturalLanguage,
      platform: 'dall-e-3',
      notes: [
        'DALL-E 3 works best with descriptive sentences rather than keyword lists',
        'Avoid excessive technical parameters',
        'Use "in the style of" instead of direct style names for copyright reasons'
      ]
    };
  }

  _buildLeonardo(prompt, options) {
    return {
      prompt: prompt,
      platform: 'leonardo',
      recommendedModels: [
        'Leonardo Vision XL',
        'Leonardo PhotoReal',
        'Absolute Reality',
        'Leonardo Anime'
      ],
      settings: {
        guidance: options.guidance || 7,
        steps: options.steps || 30
      }
    };
  }

  _buildNiji(prompt, options) {
    // Niji Journey is specialized for anime/manga
    const njParams = {
      version: options.version || '6',
      stylize: options.stylize || 500
    };
    
    const paramStr = `--niji ${njParams.version} --stylize ${njParams.stylize}`;
    
    return {
      prompt: `${prompt} ${paramStr}`,
      platform: 'nijijourney',
      model: 'niji 6',
      note: 'Niji Journey excels at anime and manga风格的艺术创作'
    };
  }

  _parseAspectRatio(ratio) {
    // Parse aspect ratio string to dimensions
    const ratios = {
      '1:1': { width: 1024, height: 1024 },
      '4:3': { width: 1024, height: 768 },
      '3:2': { width: 1024, height: 682 },
      '16:9': { width: 1920, height: 1080 },
      '9:16': { width: 1080, height: 1920 },
      '4:5': { width: 1024, height: 1280 },
      '2:3': { width: 1024, height: 1536 },
      '3:4': { width: 768, height: 1024 }
    };
    
    return ratios[ratio] || ratios['1:1'];
  }

  _convertToNaturalLanguage(keywordList) {
    // Convert keyword list to natural language sentence
    // Simplified version - could be enhanced with better NLP
    const keywords = keywordList.split(/,\s*/).filter(Boolean);
    
    if (keywords.length <= 2) {
      return keywords.join(' and ');
    }
    
    const subject = keywords[0];
    const descriptors = keywords.slice(1);
    
    return `A ${subject} that is ${descriptors.slice(0, 3).join(', ')}, with ${descriptors.slice(3).join(', ')}.`;
  }

  // ==================== MASTER FORMULA FEATURES ====================

  /**
   * 📐 Master Formula Builder (万能公式构建器)
   * 
   * Based on gpt-image2-prompt-masterclass Chapter 2 core methodology:
   * Prompt = Subject + Scene + Style + Lighting + Composition + Details
   * 
   * @param {object} formula - Six-element master formula object
   * @returns {PromptBuilder} Self for chaining
   */
  useMasterFormula(formula) {
    const defaults = {
      subject: '',
      scene: '',
      style: '',
      lighting: '',
      composition: '',
      details: ''
    };

    const { subject, scene, style, lighting, composition, details } = { ...defaults, ...formula };

    // Validate all six elements are provided
    const missingElements = [];
    if (!subject) missingElements.push('subject');
    if (!scene) missingElements.push('scene');
    if (!style) missingElements.push('style');
    if (!lighting) missingElements.push('lighting');
    if (!composition) missingElements.push('composition');
    if (!details) missingElements.push('details');

    if (missingElements.length > 0) {
      throw new Error(`Master Formula requires all 6 elements. Missing: ${missingElements.join(', ')}`);
    }

    // Build each component
    this.setMasterFormula({
      subject,
      scene,
      style,
      lighting,
      composition,
      details
    });

    return this;
  }

  /**
   * Set master formula components individually
   * @param {object} params - Individual component parameters
   * @returns {PromptBuilder} Self for chaining
   */
  setMasterFormula(params) {
    const { subject, scene, style, lighting, composition, details } = params;

    // 1. Subject - Highest priority, must be first
    if (subject) {
      this.prompt.subject.push({
        text: subject,
        importance: 'primary',
        details: []
      });
    }

    // 2. Scene/Environment
    if (scene) {
      this.prompt.environment.push(scene);
    }

    // 3. Style - Determine overall aesthetic
    if (style) {
      this.prompt.style = this._inferStyleFromText(style);
      this.prompt._customStyle = style; // Keep original style description
    }

    // 4. Lighting
    if (lighting) {
      this.prompt.lighting.push(this._normalizeKeyword(lighting, 'lighting'));
    }

    // 5. Composition
    if (composition) {
      this.prompt.composition.push(this._normalizeKeyword(composition, 'composition'));
    }

    // 6. Details - Fine-grained enhancements
    if (details) {
      // Parse details and distribute to appropriate categories
      this._parseAndDistributeDetails(details);
    }

    return this;
  }

  /**
   * Parse detail strings and distribute to appropriate prompt categories
   * @param {string} details - Comma-separated detail descriptions
   * @private
   */
  _parseAndDistributeDetails(details) {
    const detailItems = details.split(',').map(d => d.trim()).filter(Boolean);

    detailItems.forEach(detail => {
      detail = detail.toLowerCase();

      // Material/texture detection
      if (/texture|material|surface|grain|patina|finish|coating/.test(detail)) {
        this.prompt.materials.push(details);
        return;
      }

      // Color detection
      if (/\b(red|blue|green|yellow|pink|purple|orange|gold|silver|brown|black|white)\b/.test(detail)) {
        if (!this.prompt.colors.length) {
          this.prompt.colors.push(details);
        }
        return;
      }

      // Lens/camera detection
      if (/(lens|aperture|bokeh|depth of field|f\/[0-9]|macro|telephoto|wide angle)/i.test(detail)) {
        this.prompt.composition.push(details);
        return;
      }

      // Default: add as general detail in environment or mood
      if (/atmosphere|mood|feeling|vibe|ambient/.test(detail)) {
        this.prompt.mood.push(details);
      } else {
        this.prompt.environment.push(details);
      }
    });
  }

  /**
   * Create a master formula preset object for quick reference
   * @param {string} presetName - Preset category name
   * @returns {object} Template structure
   */
  static getMasterFormulaTemplate(presetName) {
    const templates = {
      portrait_photography: {
        subject: "a young Asian woman with long black hair",
        scene: "standing on Tokyo street corner at golden hour",
        style: "cinematic film photography, Kodak Portra 400 aesthetic",
        lighting: "warm sunset glow, soft rim light separating from background",
        composition: "rule of thirds, shallow depth of field, eye-level shot",
        details: "gentle smile, natural makeup, bokeh from city lights, silky skin texture"
      },
      product_studio: {
        subject: "minimalist ceramic coffee mug filled with espresso",
        scene: "placed on light oak wooden table near morning window",
        style: "commercial product photography, clean advertising aesthetic",
        lighting: "soft natural side light from window, subtle shadows",
        composition: "overhead flat lay with negative space for text",
        details: "steam rising from cup, water droplets on table, matte glaze texture visible, cozy morning atmosphere"
      },
      urban_night: {
        subject: "crowded Shibuya crossing at rush hour",
        scene: "Tokyo urban environment at night with towering neon billboards",
        style: "street photography, documentary candid style",
        lighting: "multiple colored neon reflections on wet pavement after rain",
        composition: "wide angle capturing full intersection, low angle making buildings tower",
        details: "motion blur of moving crowds, vibrant cyan and magenta color palette, rain-soaked streets, digital signage glow"
      },
      fantasy_character: {
        subject: "elven archer princess with flowing silver hair",
        scene: "standing atop ancient stone ruins overlooking mystical forest",
        style: "fantasy digital painting, cinematic concept art",
        lighting: "ethereal moonlight filtering through trees, magical particle effects",
        composition: "heroic low angle, rule of thirds placing figure off-center",
        details: "intricate armor with glowing blue runes, bow drawn, determined expression, flowing cape, dreamy atmospheric haze"
      },
      food_lifestyle: {
        subject: "hand holding artisanal matcha latte in ceramic cup",
        scene: "cozy cafe interior with Japanese minimalist decor",
        style: "food lifestyle photography, Instagram aesthetics",
        lighting: "soft diffused daylight from large window, warm ambient lamp glow",
        composition: "close-up macro view, diagonal composition drawing eye to latte art",
        details: "perfect foam heart pattern, steam wisps rising, wooden saucer texture, blurred book and plant in background"
      }
    };

    return templates[presetName] || null;
  }

  /**
   * Generate prompt using preset master formula template
   * @param {string} presetName - Preset name from getMasterFormulaTemplate
   * @param {object} overrides - Optional parameter overrides
   * @returns {PromptBuilder} Self for chaining
   */
  useMasterFormulaPreset(presetName, overrides = {}) {
    const template = this.getMasterFormulaTemplate(presetName);
    
    if (!template) {
      throw new Error(`Preset "${presetName}" not found. Available presets: ${Object.keys(templates).join(', ')}`);
    }

    // Merge overrides into template values
    const finalFormula = {};
    Object.keys(template).forEach(key => {
      finalFormula[key] = overrides[key] || template[key];
    });

    return this.useMasterFormula(finalFormula);
  }

  // ==================== STATIC HELPER METHODS ====================

  /**
   * Quick preset builders for common scenarios
   */
  static createPortrait(options = {}) {
    const builder = new PromptBuilder();
    
    // Default portrait template
    builder.setStyle('photography')
           .addSubject(options.subject || 'beautiful Asian woman', { importance: 'primary' })
           .applyLighting('soft natural lighting', 'golden hour')
           .setComposition('rule of thirds, shallow depth of field')
           .setColorPalette(options.palette || 'natural tones')
           .setMood(options.mood || 'confident, elegant')
           .addTechParams({
             ratio: options.ratio || '9:16',
             stylize: options.stylize || 200,
             version: '6.0'
           })
           .setNegativePrompts([
             'deformed, distorted, disfigured, poorly drawn hands, poorly drawn feet, bad anatomy',
             'extra limbs, blurry, low quality, watermark, signature, text'
           ]);
    
    return builder;
  }

  static createProductPhotography(options = {}) {
    const builder = new PromptBuilder();
    
    builder.setStyle('photography')
           .addSubject(`${options.productType || 'luxury product'} product`, { importance: 'primary' })
           .addEnvironment(options.environment || 'minimalist studio setting')
           .applyLighting('professional studio lighting', 'softbox illumination')
           .setComposition('clean minimalist composition')
           .addMaterials(options.materials || ['premium finish'])
           .setNegativePrompts(['clutter, distraction, watermark, text, low resolution'])
           .addTechParams({
             ratio: options.ratio || '4:5',
             quality: '2',
             stylize: options.stylize || 100
           });
    
    return builder;
  }

  static createIllustration(options = {}) {
    const builder = new PromptBuilder();
    
    builder.setStyle('illustration')
           .addSubject(options.subject || 'fantasy character')
           .addEnvironment(options.environment || 'magical forest')
           .applyLighting('volumetric lighting', 'ethereal glow')
           .setComposition('dynamic perspective')
           .setMood(options.mood || 'whimsical, enchanting')
           .setColorPalette(options.palette || 'vibrant fantasy colors')
           .addTechParams({
             ratio: options.ratio || '3:4',
             stylize: options.stylize || 400,
             version: '6.0'
           });
    
    return builder;
  }

  static create3DRender(options = {}) {
    const builder = new PromptBuilder();
    
    builder.setStyle('3d-render')
           .addSubject(options.subject || 'modern architectural interior')
           .addEnvironment(options.environment || 'contemporary space')
           .applyLighting('ray-traced global illumination', 'architectural visualization')
           .addMaterials(options.materials || ['polished surfaces', 'glass elements'])
           .setMood(options.mood || 'sophisticated, clean')
           .addTechParams({
             ratio: options.ratio || '16:9',
             stylize: options.stylize || 250
           });
    
    return builder;
  }
}

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
  // Node.js
  module.exports = { PromptBuilder };
} else {
  // Browser
  window.PromptBuilder = PromptBuilder;
}

// ==================== USAGE EXAMPLES ====================

/*
// Example 1: Basic Portrait
const builder = new PromptBuilder();
builder.setStyle('photography')
       .addSubject('young professional Chinese woman')
       .addEnvironment('modern office building lobby')
       .applyLighting('rembrandt lighting', 'natural window light')
       .setComposition('rule of thirds')
       .setMood('confident, professional')
       .addTechParams({ ratio: '9:16', stylize: 300, version: '6.0' });

console.log(builder.build());

// Example 2: Product Photography
const productPrompt = PromptBuilder.createProductPhotography({
  productType: 'handcrafted ceramic coffee mug',
  environment: 'rustic wooden table with morning sunlight',
  ratio: '4:5',
  stylize: 150
});
console.log(productPrompt.build());

// Example 3: Platform-specific
const mjResult = builder.buildForPlatform('midjourney', {
  aspectRatio: '9:16',
  version: '6.0',
  stylize: 400
});
console.log(mjResult.prompt);

// Example 4: Using knowledge base
const kbBuilder = new PromptBuilder();
kbBuilder.useTemplate('pt003', {
  hanfu_style: 'Song dynasty elegance',
  traditional_setting: 'classical Chinese garden',
  seasonal_elements: 'cherry blossoms blooming'
});
console.log(kbBuilder.build());
*/
