/**
 * Example 16: Fitness Motivation Shot (健身励志照)
 * 
 * Use Case: Gym content, fitness challenges, health transformation posts
 * Platform: Stable Diffusion with dynamic action capture
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createFitnessMotivation() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('muscular woman mid-rep on deadlift exercise', { importance: 'primary' })
         .addEnvironment ('professional gym with rack lighting and motivational posters')
         .applyLighting('dramatic side spotlight highlighting muscle definition', 'moody low-key atmosphere')
         .setComposition ('dynamic low angle emphasizing power and strength')
         .addMaterials ('athletic compression gear, weightlifting belt, chalk-dusted hands')
         .setColorPalette('dark industrial tones, red accent lights, skin tone highlights')
         .setMood ('powerful, determined, sweat-inducing workout intensity')
         .addTechParams({
           ratio: '9:16',
           stylize: 250,
           version: '6.0'
         })
         .setNegativePrompts([
           'empty gym, bright cheerful lighting, professional posing looking at camera',
           'blurry motion, distorted muscles, poor anatomy, watermarks'
         ]);
  
  return {
    name: 'Fitness Power Shot',
    category: 'lifestyle_scene',
    zhName: '健身力量展示',
    description: '适合健身房和挑战赛的激励性内容',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    sdPrompt: builder.buildForPlatform('stable-diffusion', {
      steps: 30,
      cfg: 7.5,
      sampler: 'DPM++ 2M',
      dimensions: '1080x1920'
    }),
    useCases: [
      'Gym membership advertisements',
      'Fitness transformation journeys',
      'Workout challenge promotions',
      'Athletic apparel marketing'
    ],
    tips: [
      ['Capture peak exertion for authenticity'],
      ['Show visible effort through sweat and form'],
      ['Low key lighting creates drama'],
      ['Focus on movement not static pose']
    ]
  };
}

module.exports = createFitnessMotivation;
