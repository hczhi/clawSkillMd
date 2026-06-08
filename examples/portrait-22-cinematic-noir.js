/**
 * Example 22: Portrait Photography - Cinematic Film Quality (人像摄影：电影质感风格)
 * 
 * Based on Masterclass Chapter 5: Portrait Photography
 * Scene Type: Dramatic cinematic portrait with movie-like atmosphere
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCinematicFilmPortrait() {
  const builder = new PromptBuilder();
  
  // Master Formula with film photography aesthetics
  builder.useMasterFormula({
    subject: "mysterious woman in vintage 1940s trench coat and wide-brimmed hat",
    scene: "standing under flickering streetlamp in rainy 1950s noir city alley at night",
    style: "noir film aesthetic, classic Hollywood black and white cinematography",
    lighting: "dramatic chiaroscuro lighting, strong rim light from single overhead bulb, 
               deep shadows creating mystery",
    composition: "low angle shot making figure appear powerful, silhouette effect against wet pavement reflections",
    details: "cigarette smoke curling upward, raindrops visible on ground, 
              fedora casting shadow over eyes holding red umbrella"
  });

  // Add film-specific parameters
  builder.setMood('mysterious, dramatic, suspenseful, noir thriller')
         .addTechParams({
           ratio: '9:16',
           stylize: 350,
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'bright colors, modern clothing, digital look, oversaturated',
           'deformed hands holding cigarette, extra fingers, plastic skin',
           'watermark, text, cartoonish, anime style'
         ]);

  return {
    name: 'Cinematic Noir Portrait',
    category: 'portrait_photography_cinematic',
    zhName: '电影质感人像',
    description: '黑色电影风格的戏剧性人像，充满悬疑与神秘感',
    masterFormula: {
      subject: "mysterious woman in vintage 1940s trench coat and wide-brimmed hat",
      scene: "standing under flickering streetlamp in rainy 1950s noir city alley at night",
      style: "noir film aesthetic, classic Hollywood black and white cinematography",
      lighting: "dramatic chiaroscuro, strong rim light, deep shadows",
      composition: "low angle shot, silhouette effect, wet pavement reflections",
      details: "cigarette smoke, raindrops, fedora shadow, red umbrella"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Book cover design for mystery novels',
      'Film festival promotional materials',
      'Artistic self-expression projects',
      'Creative writing inspiration posts'
    ],
    tips: [
      'Chiaroscuro lighting creates maximum drama',
      'Black and white enhances mood without color distraction',
      'Silhouette adds mystique and viewer imagination',
      'Consider adding film grain for authenticity',
      'Props like cigarettes or umbrellas enhance period feel'
    ]
  };
}

module.exports = createCinematicFilmPortrait;
