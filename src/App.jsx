import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { list, getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { Form, Button, Image } from "react-bootstrap";

export default function App() {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState(null)

  async function handleImageUpload(e) {
    e.preventDefault()
    if (!image) return "No Image Found"

    const imageRef = ref(storage, `/image/1`)
    await uploadBytes(imageRef, image)
    const url = await getDownloadURL(imageRef)
    setUrl(url)
  }

  async function fetchImage() {
    const imageRef = ref(storage, "image/")
    const firstItem = await list(imageRef)
    const urlPromise = firstItem.items.map((imageRef) => getDownloadURL(imageRef))
    setUrl(urlPromise)
  }

  useEffect(() => {
    fetchImage()
  }, [])


  return (
    <div>
      <Form onSubmit={handleImageUpload}>
        <Form.Group>
          <Form.Control
            type='file'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <Image src={url} />
    </div>
  )
}