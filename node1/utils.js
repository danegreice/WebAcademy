function createLink(filename) {
    return `<a href="/arquivos/${filename}">${filename}</a><br>`;
}

module.exports = {createLink}