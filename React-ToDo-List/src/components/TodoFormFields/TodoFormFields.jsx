import { PRIORITIES, PRIORITY_DEFAULT } from '../../constants/priorities';
import styles from './TodoFormFields.module.css';


export function TodoFormFields({ todo = {}, showAllFields=true, register, errors}) {
  return (

    <div className={styles.FormFields}>

      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name"
          placeholder="Name"
          autoComplete="off"
          aria-invalid={!!errors.name}
          defaultValue={todo.name}
          {...register('name')}
        />
        {!!errors.name && <p className={styles.FormFieldError}>{errors.name.message}</p>}
      </div>

      {showAllFields && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              rows="3"
              aria-invalid={!!errors.description}              
              defaultValue={todo.description}
              {...register('description')}
            />
            {!!errors.description && <span className={styles.FormFieldError}>{errors.description.message}</span>}
          </div>

          <div className={styles.FormGroup}>

            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>

              <input
                type="date"
                name="deadline"
                id="deadline"
                aria-invalid={!!errors.deadline}
                defaultValue={todo.deadline}
                min={new Date().toISOString().split("T")[0]}
                {...register('deadline'
                //   , {
                //   min: !todo.id && {
                //     value: new Date().toISOString().split("T")[0],
                //     message: "Deadline cannot be in the past",
                //   }
                  // }
                )}
              />
              {!!errors.deadline && <span className={styles.FormFieldError}>{errors.deadline.message}</span>}
            </div>

            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>

              <select
                aria-invalid={!!errors.priority} 
                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                id="priority"
                {...register('priority')}
              >
                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>  
                ))}
              </select>
              {!!errors.priority && <span className={styles.FormFieldError}>{errors.priority.message}</span>}
            </div>
          </div>
        </>
      )}

    </div>

  );
}