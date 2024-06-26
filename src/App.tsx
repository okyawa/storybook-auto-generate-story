import { SquareButton } from "./components/square-buttton"

function App() {
  return (
    <>
      <main className="grid place-content-center min-h-dvh">
        <section>
          <h1 className="mb-32 text-5xl">Storybookの検証</h1>
          <div className="text-center">
            <SquareButton disabled={false}>ボタン</SquareButton>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
