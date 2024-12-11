import DeleteIcon from "@material-ui/icons/Delete";
import styles from './Notes.module.css'

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.note}>
      <h1 className={styles.h1}>{props.title}</h1>
      <p className={styles.p}>{props.content}</p>
      <button className={styles.button} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;