const Floor7 = ({ selectedId ,onSelect }) => {
  console.log("onSelect есть:", typeof onSelect === "function");
  return (
  <svg
    viewBox="0 0 2560 1440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      pointerEvents: "auto",
    }}
  >
    <g id="7floor 1">
    <rect id="701" x="2454" y="587" width="56" height="84" fill="#FFA806" fillOpacity={selectedId === "701" ? 0.6 : 0.25} onClick={() => onSelect('701')} />
    <rect id="703" x="2386" y="587" width="68" height="84" fill="#FFA806" fillOpacity={selectedId === "703" ? 0.6 : 0.25} onClick={() => onSelect('703')} />
    <rect id="705" x="2324" y="587" width="62" height="90" fill="#FFA806" fillOpacity={selectedId === "705" ? 0.6 : 0.25} onClick={() => onSelect('705')} />
    <rect id="707" x="2261" y="587" width="62" height="90" fill="#FFA806" fillOpacity={selectedId === "707" ? 0.6 : 0.25} onClick={() => onSelect('707')} />
    <rect id="709" x="2197" y="587" width="63" height="90" fill="#FFA806" fillOpacity={selectedId === "709" ? 0.6 : 0.25} onClick={() => onSelect('709')} />
    <rect id="711" x="2141" y="587" width="56" height="90" fill="#FFA806" fillOpacity={selectedId === "711" ? 0.6 : 0.25} onClick={() => onSelect('711')} />
    <rect id="713" x="2087" y="587" width="54" height="90" fill="#FFA806" fillOpacity={selectedId === "713" ? 0.6 : 0.25} onClick={() => onSelect('713')} />
    <rect id="F" x="2034" y="587" width="54" height="90" fill="white" fillOpacity={selectedId === "F" ? 0.6 : 0.25} onClick={() => onSelect('F')} />
    <rect id="M" x="1975" y="587" width="59" height="90" fill="white" fillOpacity={selectedId === "M" ? 0.6 : 0.25} onClick={() => onSelect('M')} />
    <rect id="704" x="2427" y="432" width="45" height="112" fill="#FFA806" fillOpacity={selectedId === "704" ? 0.6 : 0.25} onClick={() => onSelect('704')} />
    <rect id="706" x="2376" y="432" width="51" height="112" fill="#FFA806" fillOpacity={selectedId === "706" ? 0.6 : 0.25} onClick={() => onSelect('706')} />
    <rect id="708" x="2324" y="432" width="52" height="112" fill="#FFA806" fillOpacity={selectedId === "708" ? 0.6 : 0.25} onClick={() => onSelect('708')} />
    <rect id="710" x="2269" y="432" width="54" height="112" fill="#FFA806" fillOpacity={selectedId === "710" ? 0.6 : 0.25} onClick={() => onSelect('710')} />
    <rect id="712" x="2215" y="432" width="54" height="112" fill="#FFA806" fillOpacity={selectedId === "712" ? 0.6 : 0.25} onClick={() => onSelect('712')} />
    <rect id="714" x="2161" y="432" width="54" height="112" fill="#FFA806" fillOpacity={selectedId === "714" ? 0.6 : 0.25} onClick={() => onSelect('714')} />
    <rect id="716" x="2100" y="432" width="60" height="112" fill="#FFA806" fillOpacity={selectedId === "716" ? 0.6 : 0.25} onClick={() => onSelect('716')} />
    <rect id="718" x="2041" y="432" width="58" height="112" fill="#FFA806" fillOpacity={selectedId === "718" ? 0.6 : 0.25} onClick={() => onSelect('718')} />
    <rect id="720" x="1985" y="432" width="55" height="112" fill="#FFA806" fillOpacity={selectedId === "720" ? 0.6 : 0.25} onClick={() => onSelect('720')} />
    <rect id="722" x="1926" y="432" width="59" height="112" fill="#FFA806" fillOpacity={selectedId === "722" ? 0.6 : 0.25} onClick={() => onSelect('722')} />
    <rect id="722a" x="1806" y="464" width="75" height="80" fill="#FFA806" fillOpacity={selectedId === "722a" ? 0.6 : 0.25} onClick={() => onSelect('722a')} />
    <rect id="728" x="1659" y="416" width="146" height="128" fill="#0051FF" fillOpacity={selectedId === "728" ? 0.6 : 0.25} onClick={() => onSelect('728')} />
    <rect id="730" x="1557" y="416" width="102" height="128" fill="#5EB92D" fillOpacity={selectedId === "730" ? 0.6 : 0.25} onClick={() => onSelect('730')} />
    <rect id="732" x="1452" y="416" width="102" height="128" fill="#5EB92D" fillOpacity={selectedId === "732" ? 0.6 : 0.25} onClick={() => onSelect('732')} />
    <rect id="734" x="1344" y="416" width="108" height="128" fill="#5EB92D" fillOpacity={selectedId === "734" ? 0.6 : 0.25} onClick={() => onSelect('734')} />
    <rect id="740" x="1046" y="439" width="100" height="105" fill="#5EB92D" fillOpacity={selectedId === "740" ? 0.6 : 0.25} onClick={() => onSelect('740')} />
    <rect id="734b" x="1145" y="439" width="90" height="105" fill="#5EB92D" fillOpacity={selectedId === "734b" ? 0.6 : 0.25} onClick={() => onSelect('734b')} />
    <rect id="734a" x="1286" y="463" width="58" height="81" fill="#5EB92D" fillOpacity={selectedId === "734a" ? 0.6 : 0.25} onClick={() => onSelect('734a')} />
    <rect id="739" x="1002" y="585" width="74" height="90" fill="#5EB92D" fillOpacity={selectedId === "739" ? 0.6 : 0.25} onClick={() => onSelect('739')} />
    <rect id="F_2" x="1078" y="585" width="64" height="90" fill="white" fillOpacity={selectedId === "F_2" ? 0.6 : 0.25} onClick={() => onSelect('F_2')} />
    <rect id="M_2" x="1142" y="585" width="64" height="90" fill="white" fillOpacity={selectedId === "M_2" ? 0.6 : 0.25} onClick={() => onSelect('M_2')} />
    <rect id="741" x="927" y="585" width="74" height="90" fill="#5EB92D" fillOpacity={selectedId === "741" ? 0.6 : 0.25} onClick={() => onSelect('741')} />
    <rect id="743" x="856" y="585" width="69" height="90" fill="#5EB92D" fillOpacity={selectedId === "743" ? 0.6 : 0.25} onClick={() => onSelect('743')} />
    <rect id="745" x="765" y="586" width="91" height="90" fill="#5EB92D" fillOpacity={selectedId === "745" ? 0.6 : 0.25} onClick={() => onSelect('745')} />
    <rect id="747" x="685" y="586" width="80" height="90" fill="#5EB92D" fillOpacity={selectedId === "747" ? 0.6 : 0.25} onClick={() => onSelect('747')} />
    <rect id="749" x="605" y="586" width="78" height="90" fill="#5EB92D" fillOpacity={selectedId === "749" ? 0.6 : 0.25} onClick={() => onSelect('749')} />
    <rect id="742" x="948" y="439" width="96" height="105" fill="#5EB92D" fillOpacity={selectedId === "742" ? 0.6 : 0.25} onClick={() => onSelect('742')} />
    <rect id="744" x="857" y="439" width="91" height="105" fill="#5EB92D" fillOpacity={selectedId === "744" ? 0.6 : 0.25} onClick={() => onSelect('744')} />
    <rect id="746" x="784" y="439" width="73" height="105" fill="#5EB92D" fillOpacity={selectedId === "746" ? 0.6 : 0.25} onClick={() => onSelect('746')} />
    <rect id="748" x="725" y="439" width="57" height="105" fill="#5EB92D" fillOpacity={selectedId === "748" ? 0.6 : 0.25} onClick={() => onSelect('748')} />
    <rect id="750" x="616" y="438" width="58" height="105" fill="#5EB92D" fillOpacity={selectedId === "750" ? 0.6 : 0.25} onClick={() => onSelect('750')} />
    <rect id="752" x="548" y="438" width="65" height="106" fill="#5EB92D" fillOpacity={selectedId === "752" ? 0.6 : 0.25} onClick={() => onSelect('752')} />
    </g>
    </svg>
);
};

export default Floor7;