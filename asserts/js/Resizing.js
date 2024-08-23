function addResizers(resizerClass, syntaxClass, outputRightClass) {
    const resizers = document.querySelectorAll(`.${resizerClass}`);
    
    resizers.forEach((resizer) => {
        let isResizing = false;
        const syntax = resizer.previousElementSibling;
        const outputRight = resizer.nextElementSibling;

        resizer.addEventListener('mousedown', function () {
            isResizing = true;
            document.body.style.cursor = 'ew-resize';
        });

        document.addEventListener('mousemove', function (e) {
            if (!isResizing) return;

            const containerRect = resizer.parentElement.getBoundingClientRect();
            const syntaxWidth = e.clientX - containerRect.left;
            const offsetRight = containerRect.right - e.clientX;

            if (syntaxWidth >= 100 && offsetRight >= 100) {
                syntax.style.flexBasis = `${syntaxWidth}px`;
                outputRight.style.flexBasis = `${offsetRight}px`;
            }
        });

        document.addEventListener('mouseup', function () {
            isResizing = false;
            document.body.style.cursor = '';
        });
    });
}

addResizers('resizer', 'syntax', 'output-right');



// function addResizer(resizerId, syntaxId, outputRightId) {
//     const resizer = document.getElementById(resizerId);
//     const syntax = document.getElementById(syntaxId);
//     const outputRight = document.getElementById(outputRightId);
//     let isResizing = false;

//     resizer.addEventListener('mousedown', function (e) {
//         isResizing = true;
//         document.body.style.cursor = 'ew-resize';
//     });

//     document.addEventListener('mousemove', function (e) {
//         if (!isResizing) return;

//         const containerRect = resizer.parentElement.getBoundingClientRect();
//         const offsetRight = containerRect.right - e.clientX;
//         const syntaxWidth = e.clientX - containerRect.left;

//         syntax.style.flexBasis = `${syntaxWidth}px`;
//         outputRight.style.flexBasis = `${offsetRight}px`;
//     });

//     document.addEventListener('mouseup', function () {
//         isResizing = false;
//         document.body.style.cursor = '';
//     });
// }

// addResizer('resizer-1', 'syntax-1', 'output-right-1');

