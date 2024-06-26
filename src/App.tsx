import { RoundButton } from "./components/round-button"
import { SquareButton } from "./components/square-button"

function App() {
  return (
    <>
      <main className="grid place-content-center min-h-dvh">
        <section>
          <h1 className="mb-32 text-5xl">Storybookの検証</h1>
          <div className="text-center flex gap-2 justify-center">
            <SquareButton disabled={false}>ボタン</SquareButton>
            <RoundButton disabled={false}>角丸ボタン</RoundButton>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
