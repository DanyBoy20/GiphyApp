
const GifGridItem = ( {title, url} ) => { /* destructuramos lo que GifGrid nos envia: {...img} img es el image de usestate */

  /* console.log(title, url); */

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
