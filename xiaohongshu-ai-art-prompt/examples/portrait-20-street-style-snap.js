/**
 * Example 20: Portrait Photography - Street Style Snap (人像摄影：街拍风格)
 * 
 * Based on Masterclass Chapter 5: Portrait Photography
 * Scene Type: Candid street portrait with urban environment
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createStreetStylePortrait() {
  const builder = new PromptBuilder();
  
  // Using Master Formula approach
  builder.useMasterFormula({
    subject: "fashionable young Korean woman in oversized trench coat",
    scene: "walking down bustling Seoul Myeongdong shopping district during afternoon rush",
    style: "Korean street photography candid moment, documentary film aesthetic",
    lighting: "diffused overcast daylight, soft even illumination without harsh shadows",
    composition: "eye-level full body shot, dynamic walking pose with rule of thirds",
    details: "holding designer tote bag, wearing minimal makeup and round glasses, 
              city crowd blurred in background, autumn leaves scattered on sidewalk"
  });

  builder.addTechParams({
    ratio: '9:16',
    stylize: 280,
    quality: '1',
    version: '6.0'
  });

  builder.setNegativePrompts([
    'deformed face, distorted features, extra limbs, blurry eyes, watermark, text',
    'overly posed, stiff posture, unnatural expression, plastic skin'
  ]);

  return {
    name: 'Street Style Portrait',
    category: 'portrait_photography_street',
    zhName: '街拍风格人像',
    description: '捕捉城市街头的自然瞬间，展现真实生活感与时尚品味',
    masterFormula: {
      subject: "fashionable young Korean woman in oversized trench coat",
      scene: "walking down bustling Seoul Myeongdong shopping district during afternoon rush",
      style: "Korean street photography candid moment, documentary film aesthetic",
      lighting: "diffused overcast daylight, soft even illumination",
      composition: "eye-level full body shot, dynamic walking pose",
      details: "holding designer tote bag, round glasses, blurred crowd background"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Fashion blog content',
      'OOTD outfit sharing',
      'Travel lifestyle posts',
      'Urban culture documentation'
    ],
    tips: [
      'Candid moments feel more authentic than posed shots',
      'Overcast days provide flattering even lighting',
      'Include some environmental context for storytelling',
      'Focus on natural expressions and movement'
    ]
  };
}

module.exports = createStreetStylePortrait;
