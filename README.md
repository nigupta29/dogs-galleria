# Dogs Galleria

![Landing Page Web](./src/assets/dogs-galleria-web-ss.png)

I have created this application using React that's perfect for finding inspiration for your furry friend. Explore a collection of adorable canines and let your tail wag with cuteness overload.

```Javsscript
const fetchData = async function getRandomImagesOfTheSelectedBreeds(
    selectedBreeds
  ) {
    const selectedBreedsImages = await Promise.all(
      selectedBreeds.map(async ({ breed_key, breed_name }) => {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed_key.replace(
            '-',
            '/'
          )}/images/random`
        )
        const data = await response.json()
        return {
          id: crypto.randomUUID(),
          breed: breed_name,
          identifier: breed_key,
          img_src: data.message,
        }
      })
    )
  }
```
