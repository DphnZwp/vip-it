window.CMS_MANUAL_INIT = true;

fetch('/path/to/your/content/index.md')
  .then(response => response.text())
  .then(homeContent => {
    fetch('/path/to/your/content/over-ons.md')
      .then(response => response.text())
      .then(overContent => {
        fetch('/path/to/your/content/contact.md')
          .then(response => response.text())
          .then(contactContent => {
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
                          default: homeContent,
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
                          default: overContent,
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
                          default: contactContent,
                        },
                      ],
                    },
                  ],
                },
              ],
            };

            CMS.init({ config });
          });
      });
  });
