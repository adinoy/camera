(function ($window, $document) {

    var utils = {
        q: function (selector) {
            return $document.querySelector(selector);
        },
        prepend: function (parent, child) {
            parent.insertBefore(child, parent.firstChild)
        },
        create: function (element) {
            return $document.createElement(element);
        }
    };


    $window.utils = utils;


}(window, window.document));



(function ($window, $document, $) {

    var file = $.q("#capture");
    var list = $.q(".photos");

    file.addEventListener("change", fileChosen);

    function fileChosen (e) {
        var file = e.target.files[0];
        addToList(file);
    }

    function addToList (file) {
        $.prepend(list, wrapWithTemplate(file));
    }

    function wrapWithTemplate (file) {
        var img = wrapWithImg(file);
        var link = wrapWithLink(img, file);
        var li = wrapWithLi(link, file);
        return li;
    }

    function wrapWithImg (file) {
        var img = $.create("img");
        img.alt = file.name;
        return img;
    }

    function wrapWithLink (element, file) {
        var link = $.create("a");
        link.appendChild(element);
        return link;
    }

    function wrapWithLi (element, file) {
        var li = $.create("li");
        li.appendChild(element);
        return li;
    }


}(window, window.document, window.utils));