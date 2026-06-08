/**
 * Example 3: Cosmetics Flat Lay (化妆品美学平铺)
 * 
 * Use Case: Beauty influencer content, product showcase, skincare routine posts
 * Platform: Stable Diffusion XL optimized for detail
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCosmeticsFlatLay() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('curated skincare product arrangement', { importance: 'primary' })
         .addEnvironment('marble tray with eucalyptus sprigs on linen tablecloth')
         .applyLighting('soft morning window light', 'gentle shadows')
         .setComposition('overhead flat lay, symmetrical arrangement')
         .addMaterials('glass serum bottles, cream jars, matte pump dispensers')
         .setColorPalette('pastel palette, mint green, soft pink, creamy white')
         .setMood('clean, luxurious, spa-like serenity')
         .addTechParams({
           ratio: '4:5',
           stylize: 200,
           quality: '2'
         })
         .setNegativePrompts([
           'cluttered, messy arrangement, harsh shadows, low resolution',
           'watermark, text, logo, branding labels, fake plastic look'
         ]);
  
  return {
    name: 'Cosmetics Aesthetic Flat Lay',
    category: 'product_photography',
    zhName: '化妆品美学平铺',
    description: '适合美妆博主和产品种草的精致摆拍',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 35,
      cfg: 7.0,
      sampler: 'DPM++ 2M Karras',
      dimensions: '1024x1280'
    }),
    useCases: [
      'Instagram skincare routine posts',
      'Product review headers',
      'Shopping haul showcases',
      'Beauty brand promotional content'
    ],
    tips: [
      ['Arrange products by size or color gradient'],
      ['Add natural elements like flowers or leaves'],
      ['Soft lighting creates premium feel'],
      ['Clean background maintains focus']
    ]
  };
}

module.exports = createCosmeticsFlatLay;
