document.addEventListener('DOMContentLoaded', function () {
    const compileBtn = document.getElementById('compileBtn');
    const codeTextarea = document.getElementById('code');
    const resultDiv = document.getElementById('resultContent');
    const autoCompileCheckbox = document.getElementById('autoCompile');

    const debounce = (func, delay) => {
        let timer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const compileCode = () => {
        const code = codeTextarea.value;

        fetch('compile.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `code=${encodeURIComponent(code)}`,
        })
        .then(response => response.json())
        .then(data => {
            resultDiv.textContent = data.result;
        })
        .catch(error => {
            console.error(error);
        });
    }

    compileBtn.addEventListener('click', compileCode);

    codeTextarea.addEventListener('keydown', function (event) {
        if (event.shiftKey && event.key === 'Enter') {
            event.preventDefault();
            compileCode();
        }
    });

    codeTextarea.addEventListener('keyup', debounce(() => {
        if (autoCompileCheckbox.checked) {
            compileCode();
        }
    }, 300));
});
