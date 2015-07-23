(function ($window, $document){

    var file = q("#capture");

    file.addEventListener("input", fileChosen);

    function fileChosen (e) {
        var file = e.target;
        console.log("User had chosen this file: %o, file")
    }

    function q (selector) {
        return $document.querySelector(selector);
    }

}(window, window.document))
