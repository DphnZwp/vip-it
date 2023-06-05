fetch('/content/index.md')
  .then(response => response.text())
  .then(content => {
    CMS.registerEditorComponent({
      id: 'markdown',
      label: 'Markdown',
      pattern: /^---\n.*?---\n(.*)/s,
      fromBlock: match => match && match[1],
      toBlock: content => `---\n${content}---\n`,
      toPreview: content => `---\n${content}---\n`,
    });
    CMS.init();
    const editor = window.CMS.getEditorByFieldPath('content');
    editor.setValue(content);
  });

  fetch('/content/over-ons.md')
  .then(response => response.text())
  .then(content => {
    CMS.registerEditorComponent({
      id: 'markdown',
      label: 'Markdown',
      pattern: /^---\n.*?---\n(.*)/s,
      fromBlock: match => match && match[1],
      toBlock: content => `---\n${content}---\n`,
      toPreview: content => `---\n${content}---\n`,
    });
    CMS.init();
    const editor = window.CMS.getEditorByFieldPath('content');
    editor.setValue(content);
  });

  fetch('/content/contact.md')
  .then(response => response.text())
  .then(content => {
    CMS.registerEditorComponent({
      id: 'markdown',
      label: 'Markdown',
      pattern: /^---\n.*?---\n(.*)/s,
      fromBlock: match => match && match[1],
      toBlock: content => `---\n${content}---\n`,
      toPreview: content => `---\n${content}---\n`,
    });
    CMS.init();
    const editor = window.CMS.getEditorByFieldPath('content');
    editor.setValue(content);
  });
