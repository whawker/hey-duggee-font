import React, {
  useState,
  useCallback,
  ChangeEventHandler,
} from 'react';
import { saveSvg, saveSvgAsPng } from 'save-svg-as-png'
import SVGOutput from "./SVGOutput";
import ColorButton from "./ColorButton";
import CircleButton from "./CircleButton";
import FormOption from "./FormOption";
import './App.css';

const bgColors: Map<string, string> = new Map([
  ['Blue', '#B7EDFF'],
  ['Green', '#BAD367'],
  ['Yellow', '#E7E063'],
  ['Pink', '#FEA1BB'],
  ['Transparent', 'transparent']
])

function App() {
  const [text, setText] = useState<string>('HEY\nBUDDY')
  const [outline, setOutline] = useState<boolean>(true)
  const [background, setBackground] = useState<string>('#B7EDFF')
  const [,setForceReload] = useState<number>(0)

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    setText(e.target.value.toUpperCase());
  }, [])

  const handleSaveAsPng = useCallback(() => {
    saveSvgAsPng(document.getElementById('output'), "duggee.png");
  }, [])

  const handleSaveAsSvg = useCallback(() => {
    saveSvg(document.getElementById('output'), "duggee.svg");
  }, [])

  return (
    <>
    <div className="app container is-fluid">
      <div className="columns is-multiline">
        <div className="column is-half">
          <label htmlFor="input" className="heading">Text</label>
          <textarea
            id="input"
            className="input textarea has-text-centered"
            value={text}
            onChange={handleChange}
            autoFocus
          />
          <div className="level">
            <FormOption title="White outline?">
              <input type="checkbox" checked={outline} onChange={() => setOutline(b => !b)} />
            </FormOption>
            <FormOption title="Background">
              <div className='buttons'>
                {Array.from(bgColors.entries()).map(([name, color]) => (
                  <ColorButton
                    key={name}
                    name={name}
                    color={color}
                    isActive={background === color}
                    onClick={setBackground} />
                ))}
              </div>
            </FormOption>
            <FormOption title="Refresh">
              <CircleButton
                label="Reload"
                onClick={() => setForceReload(num => num + 1)}
              >
                &#8635;
              </CircleButton>
            </FormOption>
          </div>
        </div>
        <div className="column is-half">
          <SVGOutput id="output" text={text} outline={outline} background={background} />
          <div className="level">
            <FormOption title="Download">
              <div className='buttons'>
                <button className="button is-rounded" onClick={handleSaveAsPng}>
                  Download as PNG
                </button>
                <button className="button is-rounded" onClick={handleSaveAsSvg}>
                  Download as SVG
                </button>
              </div>
            </FormOption>
          </div>
        </div>
      </div>
    </div>
    <footer className="container is-fluid">
      <p className="heading has-text-centered">
        Disclaimer: This owner of this site is not affiliated with Hey Duggee in any official capacity.
        This site was created purely for the purpose of self education.<br />
        Observe the trademark usage policies of the rightful owners.
      </p>
    </footer>
    </>
  );
}

export default App;