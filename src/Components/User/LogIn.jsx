import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";


function LogIn() {
  return (
   <>
   <div className="flex justify-center border-2">
   <Card className=" w-4/5 md:w-2/5">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
   </div>
     
   </>
  )
}

export default LogIn