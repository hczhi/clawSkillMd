/**
 * Example 15: Travel Adventure at Famous Landmark (著名地标旅行冒险)
 * 
 * Use Case: Travel blogs, destination guides, wanderlust inspiration posts
 * Platform: Midjourney with landscape optimization
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createMachuPicchuTravel() {
  const builder = new PromptBuilder();
  
  builder.setStyle('photography')
         .addSubject('solo female traveler silhouette gazing at ancient ruins', { importance: 'primary' })
         .addEnvironment('Machu Picchu sunrise with golden light illuminating stone terraces')
         .applyLighting('dramatic sunrise breaking through clouds', 'volumetric morning mist')
         .setComposition ('wide landscape showing scale of ruins and mountains')
         .addMaterials('hiking backpack, adventure gear, layered travel clothing')
         .setColorPalette('warm sunrise oranges, mountain blues, ancient stone grays')
         .setMood ('awe-inspiring, transformative journey, personal discovery')
         .addTechParams({
           ratio: '16:9',
           stylize: 350,
           version: '6.0'
         })
         .setNegativePrompts([
           'crowded tourist groups, modern buildings visible, bad weather, cloudy overcast day',
           'blurry landscape, poor color grading, watermarks'
         ]);
  
  return {
    name: 'Machu Picchu Sunrise Journey',
    category: 'lifestyle_scene',
    zhName: '马丘比丘日出之旅',
    description: '适合旅行博主的史诗级地标景观',
    prompt: builder.build({ platform: 'xiaohongshu' }),
    midjourneyPrompt: builder.buildForPlatform('midjourney', {
      aspectRatio: '16:9',
      version: '6.0',
      stylize: 350
    }).prompt,
    useCases: [
      'Peru travel guide content',
      'Wanderlust inspirational quotes',
      'Solo female travel promotions',
      'Adventure photography showcases'
    ],
    tips: [
      ['Include human scale to emphasize monument size'],
      ['Golden hour is essential for dramatic effect'],
      ['Silhouette adds mystery and universality'],
      ['Show the journey path leading to viewpoint']
    ]
  };
}

module.exports = createMachuPicchuTravel;
