/**
 * Example 23: Portrait Photography - Vintage Film Aesthetic (人像摄影：复古胶片质感)
 * 
 * Based on Masterclass Chapter 5: Portrait Photography
 * Scene Type: Nostalgic film photography with analog aesthetic charm
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createVintageFilmPortrait() {
  const builder = new PromptBuilder();
  
  // Master Formula with Kodak Portra 400 film emulation
  builder.useMasterFormula({
    subject: "happy young family of four walking hand-in-hand",
    scene: "picnic in Central Park New York during golden hour autumn afternoon",
    style: "Kodak Portra 400 film photography, vintage 1990s family snapshot aesthetic",
    lighting: "warm sunset golden hour glow, long shadows stretching across grass, 
               soft backlight creating halo effect on hair",
    composition: "candid moment captured mid-laughter, horizontal eye-level shot 
               capturing full bodies and park background",
    details: "fallen maple leaves scattered around, checkered picnic blanket visible,
              natural unposed expressions, slight film grain texture, 
              subtle color saturation typical of film stock"
  });

  builder.setMood('nostalgic, warm, joyful, timeless family memory')
         .addTechParams({
           ratio: '4:5',
           stylize: 280,
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'digital clean look, oversharpened, studio lighting, plastic skin',
           'watermark, text, modern smartphones visible, contemporary fashion',
           'cartoonish, overly saturated,HDR effects'
         ]);

  return {
    name: 'Vintage Film Family Portrait',
    category: 'portrait_photography_vintage',
    zhName: '复古胶片人像',
    description: '模拟胶片质感的家庭纪实摄影，怀旧温馨充满生活气息',
    masterFormula: {
      subject: "happy young family of four walking hand-in-hand",
      scene: "picnic in Central Park New York during golden hour autumn",
      style: "Kodak Portra 400 film photography, vintage 1990s aesthetic",
      lighting: "warm sunset golden hour, long shadows, soft backlight",
      composition: "candid mid-laughter moment, horizontal eye-level full body",
      details: "fallen maple leaves, checkered blanket, natural expressions, film grain"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Family reunion memories',
      'Anniversary celebration posts',
      'Nostalgic lifestyle content',
      'Brand campaign with vintage appeal'
    ],
    tips: [
      'Golden hour provides most flattering warm tones',
      'Film grain adds authentic retro character',
      'Candid moments capture genuine emotion better',
      'Kodak Portra 400 gives warm skin tones',
      'Consider adding subtle light leaks for authenticity'
    ]
  };
}

module.exports = createVintageFilmPortrait;
