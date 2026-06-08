/**
 * Example 17: Heartwarming Pet Moment (萌宠玩耍互动)
 * 
 * Use Case: Pet influencer content, animal welfare posts, lifestyle pet care
 * Platform: Midjourney optimized for warmth and emotion
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCuteDogPlay() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('golden retriever puppy playing fetch with toddler in living room', { importance: 'primary' })
         .addEnvironment('cozy sunlit family room with soft rug and toys scattered')
         .applyLighting('warm afternoon sunlight streaming through window', 'soft natural illumination')
         .setComposition ('eye-level capturing genuine interaction moment')
         .addMaterials('fluffy golden fur texture, colorful chew toys, plush throw pillows')
         .setColorPalette('warm honey golds, soft whites, pastel rug colors')
         .setMood('heartwarming, innocent joy, wholesome family bonding time')
         .addTechParams({
           ratio: '4:5',
           stylize: 200,
           version: '6.0'
         })
         .setNegativePrompts([
           'aggressive dog, dirty environment, scary expressions, watermarks visible on furniture',
           'blurry action, unnatural poses, dead pixels'
         ]);
  
  return {
    name: 'Golden Retriever Puppy Play',
    category: 'lifestyle_scene',
    zhName: '萌宠玩耍时刻',
    description: '适合宠物博主和家庭温馨内容的可爱瞬间',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '4:5',
      version: '6.0',
      stylize: 200
    }).prompt,
    useCases: [
      'Pet product promotional content',
      'Dog training blog features',
      'Family lifestyle articles',
      'Animal rescue awareness posts'
    ],
    tips: [
      ['Genuine expressions are key to viral content'],
      ['Safety is paramount - ensure age-appropriate interactions'],
      ['Natural light brings out coat colors beautifully'],
      ['Include props like toys for storytelling']
    ]
  };
}

module.exports = createCuteDogPlay;
