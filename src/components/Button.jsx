function Button({ text }) {
  return (
    <button
      className="w-full md:w-auto px-6 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200"
      type="submit"
    >
      {text}
    </button>
  );
}

export default Button;
