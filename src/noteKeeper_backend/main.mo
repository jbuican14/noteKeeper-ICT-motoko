import List "mo:base/List";
import Debug "mo:base/Debug";

actor NoteKeeper {
  // js can use this when use public
  public type Note = {
    title : Text;
    content : Text;
  };

  var notes : List.List<Note> = List.nil<Note>(); // start empty

  public func createNote(titleText : Text, contentText : Text) {

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);

    Debug.print(debug_show (notes));
  };
};
