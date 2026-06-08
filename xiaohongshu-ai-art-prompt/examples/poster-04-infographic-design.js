/**
 * Example 28: Poster Illustration - Infographic Design (海报插画：信息图表设计)
 * 
 * Based on Masterclass Chapter 6: Poster & Illustration Design
 * Scene Type: Clean modern infographic for data visualization and educational content
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createInfographicDesign() {
  const builder = new PromptBuilder();
  
  // Master Formula for clean modern infographic
  builder.useMasterFormula({
    subject: "isometric 3D illustration showing social media marketing funnel stages",
    scene: "clean white background with subtle geometric pattern overlay, each funnel stage represented by colorful floating icons including smartphone, heart icon, chart graph, shopping cart",
    style: "modern flat design infographic, isometric 3D icons, corporate presentation aesthetic,
               Swiss Style typography integration space",
    lighting: "soft even studio illumination without harsh shadows, slight drop shadows under elements creating depth perception,
               subtle gradient from top to bottom providing visual flow",
    composition: "vertical layout optimized for mobile viewing following clear top-to-bottom visual hierarchy,
               generous white space between sections preventing visual crowding",
    details: "vibrant brand colors in gradient blue to purple progression, circular progress indicators,
              minimal line connecting each stage for clarity, placeholder text areas clearly defined,
              QR code corner element for additional resource linking"
  });

  builder.setColorPalette('gradient blue (#1E90FF) to purple (#8A2BE2), accent coral (#FF6B6B),
                         neutral grays for supporting text')
         .setMood('professional, clear, approachable, informative, trustworthy')
         .addTechParams({
           ratio: '9:16', // Mobile-first vertical format
           stylize: 250, // Moderate stylization for business use
           quality: '2', // Higher quality needed for professional delivery
           version: '6.0'
         })
         .setNegativePrompts([
           'cluttered layout, too many competing elements, distracting backgrounds',
           'watermark, illegible text blocks, cartoonish inconsistent style',
           'dark backgrounds, heavy textures, chaotic color combinations'
         ]);

  return {
    name: 'Social Media Marketing Infographic',
    category: 'poster_illustration_infographic',
    zhName: '信息图表设计',
    description: '现代商业信息图设计，适合营销报告、品牌手册或社交媒体长图内容',
    masterFormula: {
      subject: "isometric 3D illustration of social media marketing funnel stages",
      scene: "clean white background with geometric pattern, floating colorful icons per stage",
      style: "flat design infographic, isometric 3D icons, Swiss Style typography space",
      lighting: "even soft illumination, subtle drop shadows, top-down gradient",
      composition: "vertical mobile-optimized, clear hierarchy, generous whitespace",
      details: "blue-purple gradient, progress circles, minimal connecting lines, QR code corner"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'Marketing team presentations',
      'Client pitch materials',
      'Educational blog post illustrations',
      'Annual report infographics'
    ],
    tips: [
      'White space prevents information overload',
      'Clear visual hierarchy guides reader through content logically',
      'Isometric style adds depth without sacrificing clarity',
      'Consistent color palette reinforces brand identity',
      'Keep text areas distinct from decorative elements'
    ]
  };
}

module.exports = createInfographicDesign;
