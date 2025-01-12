import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: [
              './src/**/*.html',
              './src/**/*.js',
              './src/**/*.jsx'
            ],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
