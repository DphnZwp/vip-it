window.CMS_MANUAL_INIT = true;

fetch('/path/to/your/content/index.md')
  .then(response => response.text())
  .then(content => {
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
            {
              name: 'over',
              label: 'Over ons',
              file: 'content/over-ons.md',
              fields: [
                {
                  name: 'content',
                  label: 'Content',
                  widget: 'markdown',
                },
              ],
            },
            {
              name: 'contact',
              label: 'Contact',
              file: 'content/contact.md',
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

    config.collections[0].files[0].fields[0].default = content;

    CMS.init({ config });
  });
