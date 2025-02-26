function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="grid place-items-center text-gray-50 bg-gray-950 mt-20 p-8">
      <p>©{year} Dev by Quinten Claes </p>
    </footer>
  );
}

export default Footer;
