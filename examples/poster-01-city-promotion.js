/**
 * Example 25: Poster Illustration - City Promotion Campaign (海报插画：城市宣传)
 * 
 * Based on Masterclass Chapter 6: Poster & Illustration Design
 * Scene Type: Modern city promotional material with vibrant energy
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createCityPromoPoster() {
  const builder = new PromptBuilder();
  
  // Master Formula for city promotional poster
  builder.useMasterFormula({
    subject: "dynamic skyline panorama of Shanghai Bund at twilight",
    scene: "iconic landmark buildings including Oriental Pearl Tower and Shanghai Tower illuminated,
               Huangpu River in foreground reflecting city lights, futuristic transportation elements",
    style: "modern vector illustration meets cinematic photography, stylized promotional graphic design",
    lighting: "golden hour transitioning to blue hour, building floodlights creating warm-cool contrast,
               neon signs adding pops of pink and cyan",
    composition: "wide horizontal banner layout following rule of thirds with river dividing bottom third,
               dramatic diagonal leading lines from bridge cables drawing eye upward",
    details: "silhouettes of pedestrians on riverside promenade, boats leaving light trails on water,
              floating Chinese lanterns as decorative elements, gold accent typography space"
  });

  builder.setColorPalette('deep blues contrasting with warm orange-gold building lights,
                         magenta and cyan neon accents')
         .setMood('energetic, modern, prosperous, welcoming metropolis')
         .addTechParams({
           ratio: '16:9', // Horizontal for banner use
           stylize: 320,
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'dark oppressive atmosphere, decaying buildings, dull gray tones',
           'watermark, text overlays blocking view, cartoonish proportions',
           'too many individual buildings cluttering composition'
         ]);

  return {
    name: 'Shanghai City Promo Poster',
    category: 'poster_illustration_city',
    zhName: '城市宣传海报',
    description: '展现上海国际大都市活力的宣传推广设计，适合旅游局或商业招商使用',
    masterFormula: {
      subject: "dynamic skyline panorama of Shanghai Bund at twilight",
      scene: "Oriental Pearl Tower and Shanghai Tower illuminated, Huangpu River reflecting city lights",
      style: "vector illustration meets cinematic photography, promotional graphic design",
      lighting: "golden hour to blue hour transition, building floodlights, neon accents",
      composition: "wide horizontal banner, rule of thirds, diagonal bridge cables",
      details: "pedestrian silhouettes, boat light trails, floating lanterns, gold typography space"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Tourism board promotional campaigns',
      'City investment attraction materials',
      'Event venue advertising',
      'Corporate annual report covers'
    ],
    tips: [
      'Include recognizable landmarks for instant identification',
      'Balance warm and cool tones for visual interest',
      'Leave negative space for typography placement',
      'Floodlight effects add drama and glamour',
      'Consider cultural elements like lanterns for local flavor'
    ]
  };
}

module.exports = createCityPromoPoster;
