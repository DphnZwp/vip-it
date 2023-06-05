window.CMS_MANUAL_INIT = true;

fetch('/content/index.md')
  .then(response => response.text())
  .then(content => {
    document.addEventListener('DOMContentLoaded', () => {
      const contentField = document.querySelector('textarea[name="fields[content]"]');

      if (contentField) {
        contentField.value = content;
      }
    });

    const config = {
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      media_folder: '_site/images',
      public_folder: '/images',
      collections: [
        {
          name: 'pages',
          label: 'Pages',
          files: [
            {
              name: 'home',
              label: 'Home',
              file: 'content/index.md',
              fields: [
                {
                  name: 'content',
                  label: 'Content',
                  widget: 'markdown',
                },
              ],
            },
          ],
        },
      ],
    };

    CMS.init({ config });
  });
