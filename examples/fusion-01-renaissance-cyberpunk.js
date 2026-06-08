/**
 * Example 35: Creative Fusion - Cross-Style Renaissance Meets Cyberpunk (创意混搭：文艺复兴遇上赛博朋克)
 * 
 * Based on Masterclass Chapter 9: Creative Style Fusion & Mashups
 * Scene Type: Unexpected juxtaposition of classical art with futuristic technology
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createRenaissanceCyberpunkFusion() {
  const builder = new PromptBuilder();
  
  // Master Formula for unexpected style fusion
  builder.useMasterFormula({
    subject: "flawless marble sculpture of Venus de Milo reimagined as cyborg with glowing neural interface ports visible through cracked surface,
               organic marble seamlessly transitioning into sleek titanium mechanical components",
    scene: "neo-Renaissance cathedral interior combining Gothic arches with holographic stained glass displaying digital prayers,
               ancient stone floor embedded with glowing circuit board patterns mimicking religious iconography",
    style: "photorealistic surreal mashup blending Renaissance oil painting techniques with cyberpunk aesthetic,
               caravaggio-inspired chiaroscuro lighting contrasting with neon-lit technological elements",
    lighting: "dramatic single light source from above illuminating divine glow around head like halo effect,
               cool blue cyan circuit traces glowing faintly within body cracks, warm candlelight mixing with cold LED reflections",
    composition: "classic triptych-style arrangement centered on cyborg Venus figure, symmetrical balance honoring original sacred构图,
               low camera angle making statue appear monumental and godlike despite technological transformation",
    details: "marble texture showing realistic pores and imperfections merging into brushed metal panels,
              glowing data streams visible through translucent skin patches, antique rosary beads transformed into fiber optic necklaces,
              hovering drones shaped like angels circling overhead, incense smoke carrying digital particle effects"
  });

  builder.setColorPalette('warm ochre and sienna tones (#C19A6B), metallic silver (#C0C0C0),
                         electric cyan (#00FFFF), deep crimson (#8B0000), aged gold (#D4AF37)')
         .setMood ('transcendent, unsettling, beautiful paradox, reverent yet revolutionary, technologically spiritual')
         .addTechParams({
           ratio: '2:3', // Vertical traditional portrait format
           stylize: 480, // High stylization needed for artistic fusion
           quality: '2',
           version: '6.0'
         })
         .setNegativePrompts([
           'pure photorealism without artistic interpretation, generic sci-fi without historical reference, cartoonish proportions',
           'watermark, inconsistent textures, poorly blended materials',
           'too clean sterile environment lacking atmosphere, mismatched color temperatures'
         ]);

  return {
    name: 'Renaissance-Cyberpunk Cyborg Venus',
    category: 'creative_fusion_renaissance_cyberpunk',
    zhName: '文艺复兴与赛博朋克融合',
    description: '古典艺术与未来科技的超现实碰撞，适合概念艺术展示或文化评论类内容',
    masterFormula: {
      subject: "marble Venus de Milo statue as cyborg with neural ports, marble to titanium transition",
      scene: "Gothic cathedral with holographic stained glass, circuit patterns on stone floor",
      style: "surreal mashup, Renaissance oil techniques + cyberpunk, Caravaggio chiaroscuro",
      lighting: "dramatic top-down halo glow, cyan circuit traces, mixed candle/LED reflections",
      composition: "triptych style symmetry, low heroic angle, central cyborg Venus focal point",
      details: "marble pores merging metal, data streams through skin, fiber optic rosaries, angel drones"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Digital art portfolio statement pieces',
      'Concept art for sci-fi literature projects',
      'Gallery exhibition proposals',
      'Philosophical commentary on technology's role in humanity'
    ],
    tips: [
      'Successful fusion requires both styles to remain identifiable',
      'Lighting must bridge the temporal gap between eras',
      'Material transitions should feel intentional not accidental',
      'Historical references gain meaning when contrasted with future',
      'Consider what narrative emerges from this collision'
    ]
  };
}

module.exports = createRenaissanceCyberpunkFusion;
