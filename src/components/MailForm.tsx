function MailForm() {
  return (
    <div className='email'>
      <form action="">
        <p className='email__title'>Email</p>
        <input
          className='email__input'
          type="text"
          placeholder='With regex validation'
        />
      </form>
    </div>
  );
}

export default MailForm;
