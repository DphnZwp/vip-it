window.CMS_MANUAL_INIT = true;

window.addEventListener("DOMContentLoaded", () => {
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
                    default: content,
                  },
                ],
              },
              // Add other pages (about, contact) similarly
            ],
          },
        ],
      };

      CMS.init({ config });
    });
});