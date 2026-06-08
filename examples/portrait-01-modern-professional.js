/**
 * Example 1: Modern Professional Portrait (现代职业人像)
 * 
 * Use Case: LinkedIn profile, corporate headshots, business social media
 * Platform: Midjourney v6.0 optimized
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createModernProfessionalPortrait() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('young Asian professional woman in her late 20s', { importance: 'primary' })
         .addEnvironment('modern glass office building lobby with natural light')
         .applyLighting('soft rembrandt lighting', 'natural window illumination')
         .setComposition('rule of thirds, eye-level shot')
         .addMaterials('tailored navy blazer, silk white blouse, minimal gold jewelry')
         .setMood('confident, approachable, professional')
         .setColorPalette('neutral tones with navy and warm highlights')
         .addTechParams({
           ratio: '9:16',
           stylize: 250,
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'deformed hands, distorted face, extra fingers, blurry eyes, watermark, text, logo, bad anatomy',
           'overly saturated, plastic skin, airbrushed look, heavy makeup'
         ]);
  
  return {
    name: 'Modern Professional Portrait',
    category: 'portrait_photography',
    zhName: '现代职业人像',
    description: '适合领英头像和企业宣传的专业形象照',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '9:16',
      version: '6.0',
      stylize: 250
    }).prompt,
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 30,
      cfg: 7.5,
      sampler: 'DPM++ 2M Karras',
      dimensions: '1080x1920'
    }),
    useCases: [
      'LinkedIn profile photo',
      'Company website team page',
      'Business conference materials',
      'Professional social media'
    ],
    tips: [
      'Use neutral background for versatility',
      'Ensure eyes are sharp and well-lit',
      'Natural makeup looks more authentic',
      'Good lighting is crucial for professional appearance'
    ]
  };
}

module.exports = createModernProfessionalPortrait;
