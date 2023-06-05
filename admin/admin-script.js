fetch('/content/index.md')
  .then(response => response.text())
  .then(content => {
    window.CMS.registerPreviewTemplate('home', ({ entry }) => {
      const markdownContent = entry.getIn(['data', 'content']);
      const updatedContent = markdownContent || content;
      return `
        <div>
          <textarea id="cms-content" name="content" style="display: none">${updatedContent}</textarea>
        </div>
      `;
    });
  });

  fetch('/content/over-ons.md')
  .then(response => response.text())
  .then(content => {
    window.CMS.registerPreviewTemplate('home', ({ entry }) => {
      const markdownContent = entry.getIn(['data', 'content']);
      const updatedContent = markdownContent || content;
      return `
        <div>
          <textarea id="cms-content" name="content" style="display: none">${updatedContent}</textarea>
        </div>
      `;
    });
  });

  fetch('/content/contact.md')
  .then(response => response.text())
  .then(content => {
    window.CMS.registerPreviewTemplate('home', ({ entry }) => {
      const markdownContent = entry.getIn(['data', 'content']);
      const updatedContent = markdownContent || content;
      return `
        <div>
          <textarea id="cms-content" name="content" style="display: none">${updatedContent}</textarea>
        </div>
      `;
    });
  });
  