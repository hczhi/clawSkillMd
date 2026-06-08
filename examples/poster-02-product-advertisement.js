/**
 * Example 26: Poster Illustration - Product Advertisement (海报插画：产品广告)
 * 
 * Based on Masterclass Chapter 6: Poster & Illustration Design
 * Scene Type: Commercial product advertising with clean aesthetic
 */

const { PromptBuilder } = require('../../prompt-builder.js');

function createProductAdPoster() {
  const builder = new PromptBuilder();
  
  // Master Formula for luxury skincare product advertisement
  builder.useMasterFormula({
    subject: "luxury glass serum bottle with gold dropper cap floating in mid-air",
    scene: "minimalist marble studio background with soft watercolor splash effects in pastel colors,
               scattered rose petals and fresh eucalyptus leaves creating organic framing",
    style: "high-end commercial advertising photography, minimalist luxury aesthetic,
               clean product showcase with editorial quality",
    lighting: "soft diffused studio lighting from multiple angles eliminating harsh shadows,
               subtle rim light creating halo effect around bottle silhouette",
    composition: "centered symmetrical composition with negative space above for headline text,
               overhead flat-lay perspective showing product label clearly",
    details: "crystal-clear liquid visible inside bottle, condensation droplets on exterior suggesting freshness,
              soft pink and sage green color palette reflecting brand identity, delicate botanical elements"
  });

  builder.setColorPalette('white marble base, soft blush pink splashes, sage green accents,
                         metallic gold highlights')
         .setMood('elegant, pure, premium, trustworthy, refreshing')
         .addTechParams({
           ratio: '4:5', // Instagram-friendly vertical format
           stylize: 180,
           quality: '2', // Higher quality for commercial use
           version: '6.0'
         })
         .setNegativePrompts([
           'messy cluttered background, harsh shadows, plastic-looking materials',
           'watermark, visible text competing with product, distorted bottle shape',
           'overly saturated colors, cartoonish style, low resolution'
         ]);

  return {
    name: 'Luxury Skincare Ad Poster',
    category: 'poster_illustration_product',
    zhName: '产品广告海报',
    description: '高端护肤品商业广告设计，适合电商详情页或社交媒体广告投放',
    masterFormula: {
      subject: "luxury glass serum bottle with gold dropper cap floating in mid-air",
      scene: "minimalist marble background with watercolor splashes, rose petals, eucalyptus",
      style: "commercial advertising photography, minimalist luxury aesthetic",
      lighting: "soft diffused studio lighting, subtle rim light halo effect",
      composition: "centered symmetry, negative space above, overhead flat-lay view",
      details: "condensation droplets, crystal-clear liquid, pink/sage palette, botanical elements"
    },
    prompt: builder.build({ platform: 'xiaohongshu' }),
    useCases: [
      'E-commerce product pages',
      'Instagram/Facebook ad campaigns',
      'Brand launch announcements',
      'Influencer collaboration briefs'
    ],
    tips: [
      'Negative space is crucial for adding your copy/text',
      'Soft shadows convey quality without harshness',
      'Natural props like flowers add authenticity',
      'Condensation suggests freshness and efficacy',
      'Metallic accents elevate perceived value'
    ]
  };
}

module.exports = createProductAdPoster;
