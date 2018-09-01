$(document).ready(function(){
    var granimInstance = new Granim({
        element: '.banner-area',
        name: 'basic-gradient',
        direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#AA076B', '#61045F'],
                    ['#02AAB0', '#00CDAC'],
                    ['#DA22FF', '#9733EE']
                ]
            }
        }
    });
});