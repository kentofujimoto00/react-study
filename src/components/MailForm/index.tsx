import './index.css';

export const MailForm = () => {
  return (
    <div className='email'>
      <form action="">
        <label className='email__title'>Email</label>
        <input
          className='email__input'
          type="text"
          placeholder='With regex validation'
        />
      </form>
    </div>
  );
}
