/**
 * Example 27: Poster Illustration - Movie/Anime Style (海报插画：电影动漫风格)
 * 
 * Based on Masterclass Chapter 6: Poster & Illustration Design
 * Scene Type: Cinematic movie poster aesthetic with dramatic character showcase
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createMoviePosterIllustration() {
  const builder = new PromptBuilder();
  
  // Master Formula for anime-influenced movie poster design
  builder.useMasterFormula({
    subject: "determined female cyberpunk hacker with neon-blue bob haircut and augmented reality visor",
    scene: "standing in rainy Tokyo alleyway surrounded by holographic advertisements, flying drones overhead,
               neo-Tokyo skyline visible in distant background through fog and neon haze",
    style: "anime movie poster art, Studio Ghibli meets Akira aesthetic, cel-shaded digital painting,
               cinematic composition with dramatic color grading",
    lighting: "multiple colored neon signs reflecting on wet pavement and face, purple-pink cyberpunk palette,
               rim light from holograms creating atmospheric depth, volumetric rain visibility",
    composition: "heroic low-angle shot making character appear powerful and dominant, rule of thirds placing figure off-center,
               deep perspective drawing eye to distant city lights",
    details: "circuit board patterns visible on cheeks from AR tech, rain streaks captured mid-fall,
              glowing blue data streams floating in air around her hands, determined intense expression"
  });

  builder.setColorPalette('electric blue (#00FFFF), magenta (#FF00FF), deep purple (#4B0082),
                         cyan highlights')
         .setMood('adventurous, rebellious, high-tech dystopian, empowering')
         .addTechParams({
           ratio: '2:3', // Classic movie poster aspect ratio
           stylize: 450, // High stylization for artistic effect
           quality: '1',
           version: '6.0'
         })
         .setNegativePrompts([
           'photorealistic faces, Western animation style, Disney Pixar look',
           'watermark, text blocking character view, flat uninspired colors',
           'too clean environment lacking cyberpunk grime and detail'
         ]);

  return {
    name: 'Cyberpunk Anime Movie Poster',
    category: 'poster_illustration_movie_anime',
    zhName: '电影动漫风格海报',
    description: '赛博朋克风格的动画电影海报设计，适合游戏宣传或原创 IP 推广',
    masterFormula: {
      subject: "female cyberpunk hacker with neon-blue bob, AR visor",
      scene: "rainy Tokyo alley, holographic ads, flying drones, neo-Tokyo skyline",
      style: "anime movie poster, Studio Ghibli meets Akira, cel-shaded painting",
      lighting: "neon reflections, purple-pink cyberpunk palette, volumetric rain",
      composition: "low-angle heroic pose, rule of thirds, deep perspective to skyline",
      details: "circuit board patterns on face, rain streaks mid-fall, floating data streams"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Video game promotional materials',
      'Original anime project pitches',
      'Fiction book cover designs',
      'Convention booth graphics'
    ],
    tips: [
      'Cel-shading is key for anime aesthetic authenticity',
      'Neon color palettes define cyberpunk mood instantly',
      'Rain effects add atmosphere and visual interest',
      'Low angles make characters appear heroic and powerful',
      'Consider adding subtle glitch effects for tech feel'
    ]
  };
}

module.exports = createMoviePosterIllustration;
