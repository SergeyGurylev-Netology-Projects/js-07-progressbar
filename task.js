const formUpload = document.forms['form'];
const progress = document.getElementById('progress');

formUpload.addEventListener('submit', e => {
    e.preventDefault();
    progress.value = 0;

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', e => {
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total;
        }
    });

    xhr.upload.addEventListener('error', e => {
        alert('Ошибка загрузки файла');
        progress.value = 0;
    })

    xhr.addEventListener('readystatechange', e => {
        if (xhr.readyState === xhr.DONE) {
            alert('Файл успешно загружен');
            progress.value = 0;
        }
    })

    xhr.open('POST', form.getAttribute('action'), true);
    xhr.send(new FormData(formUpload));
});
