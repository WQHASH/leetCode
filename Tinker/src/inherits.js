var AnnoEditor = (function () {
	function AnnoEditor(geomtrypol) {
        this._geomtrypol = geomtrypol;
    };

    AnnoEditor.prototype.startEdit = function(){};
    return AnnoEditor;
}());

function getAnnoEditor(){
	var c = new AnnoEditor();
	console.log(c,"AnnoEditor");
};
getAnnoEditor()