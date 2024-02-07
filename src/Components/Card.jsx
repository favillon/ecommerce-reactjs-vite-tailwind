const Card = (info) => {
  const data = info.info;
  const {title, price, description,  category, images} = data;
  return (
    <article className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={description} />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
            +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-xs font-light">{title}</span>
        <span className="text-lg font-medium">{price}</span>
      </p>
    </article>
  )
}

export { Card };
