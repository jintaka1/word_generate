function submitForm(event) {
    
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const book = document.getElementById('book').value;

    const doc = new docx.Document({
        sections: [
            {
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Hi, my name is "),
                            new docx.TextRun({
                                text: name,
                                bold: true,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("and my email address is "),
                            new docx.TextRun({
                                text: email,
                                bold: true,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("My favorite book is "),
                            new docx.TextRun({
                                text: book,
                                bold: true,
                            }),
                        ],
                    }),
                ],
            },
        ],
    });

    docx.Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "MyDocument.docx");
    });
}
