/**
 * Quick Demo - Test the Prompt Builder
 */

const { PromptBuilder } = require('./prompt-builder.js');

console.log('🎨 小红书 AI 绘画提示词构建器 v1.0\n');
console.log('=' .repeat(60));

// Example 1: Simple portrait
console.log('\n👤 Example 1: Modern Portrait');
const portraitBuilder = new PromptBuilder();
portraitBuilder.setStyle('photography')
               .addSubject('elegant Asian woman in silk cheongsam', { importance: 'primary' })
               .addEnvironment('traditional Chinese garden with peonies')
               .applyLighting('soft golden hour sunlight', 'natural window light')
               .setComposition('rule of thirds, portrait orientation')
               .setMood('graceful, serene, timeless beauty')
               .setColorPalette('emerald green and gold accents')
               .addTechParams({ ratio: '9:16', stylize: 300, version: '6.0' });

console.log(portraitBuilder.build({ platform: 'xiaohongshu' }));

// Example 2: Product photography
console.log('\n' + '='.repeat(60));
console.log('\n🛍️ Example 2: Cosmetics Flat Lay');
const productBuilder = new PromptBuilder();
productBuilder.setStyle('photography')
              .addSubject('skincare products arrangement on marble tray', { importance: 'primary' })
              .addEnvironment('minimalist bathroom vanity with eucalyptus')
              .applyLighting('soft morning natural light', 'gentle shadows')
              .setComposition('overhead flat lay, symmetrical')
              .addMaterials('glass bottles, cream jars, matte finishes')
              .setColorPalette('pastel palette soft pink mint white')
              .addTechParams({ ratio: '4:5', quality: '2' });

console.log(productBuilder.build());

// Example 3: Illustration
console.log('\n' + '='.repeat(60));
console.log('\n🎨 Example 3: Fantasy Illustration');
const illustrationBuilder = new PromptBuilder();
illustrationBuilder.setStyle('illustration')
                   .addSubject('young mage character holding glowing staff')
                   .addEnvironment('ancient library with floating books')
                   .applyLighting('magical blue glow from spellbooks')
                   .setComposition('heroic upward angle')
                   .setMood('mysterious powerful magical adventure')
                   .setColorPalette('deep purples electric blues gold accents')
                   .addTechParams({ ratio: '2:3', stylize: 500, version: '6.0' });

console.log(illustrationBuilder.build());

// Example 4: Platform-specific output
console.log('\n' + '='.repeat(60));
console.log('\n⚙️ Example 4: Platform-Specific Output');
const mjOutput = portraitBuilder.buildForPlatform('midjourney', {
  aspectRatio: '9:16',
  version: '6.0',
  stylize: 300
});
console.log('🔹 Midjourney Prompt:', mjOutput.prompt);

const sdOutput = portraitBuilder.buildForPlatform('stable-diffusion', {
  steps: 30,
  cfg: 7.5,
  sampler: 'DPM++ 2M Karras',
  dimensions: '1080x1920'
});
console.log('🔸 Stable Diffusion Positive:', sdOutput.positive);
console.log('🔸 Negative Prompt:', sdOutput.negative);

// Example 5: Using presets
console.log('\n' + '='.repeat(60));
console.log('\n✨ Example 5: Using Preset Builders');
const presetPortrait = PromptBuilder.createPortrait({
  subject: 'confident businesswoman in modern office',
  mood: 'professional, approachable',
  ratio: '9:16'
});
console.log(presetPortrait.build());

console.log('\n' + '='.repeat(60));
console.log('\n✅ All examples completed successfully!\n');
