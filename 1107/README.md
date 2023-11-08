# 2023-11-07 레포트

## PyScript란?

Python은 현재 수많은 라이브러리와 오픈 소스를 통해 데이터 분석과 시각화 및 머신러닝, 딥러닝과 같이 인공지능 분야에서 활발하게 활동 중인 프로그래밍 언어 중 하나입니다. 그렇다 보니 python은 back-end 서비스에 더욱 최적화되어있다고 볼 수 있습니다. 추가로 Python의 특징인 쉽고 빠르다는 장점을 통해 data scientist, researcher, developer 등 다양한 직종에서 활용되고 있는 프로그래밍 언어입니다. "이렇게 훌륭한 프로그래밍 언어를 Browser에서 사용할 수 있다면 얼마나 좋을까?"라는 말은 꽤 오래전부터 나오던 이야기였는데 올해 PyCon 2022 conference에서 Anaconda가 많은 사람의 염원을 이루어줄 PyScript를 공개하였습니다.

PyScript는 Pyodide, Emscripten, WASM(WebAssembly)와 더불어 기타 최신 웹 기술을 사용하여 HTML에서 Python code를 사용할 수 있도록 하는 front-end 프레임워크입니다. 그동안 Python은 웹과 상호작용을 하기 위해선 HTML, CSS, JS를 서버로 실행해야만 가능했는데 이는 다른 언어에 비해 굉장히 불편하고 어려운 부분이었습니다. 하지만 이를 해결하기 위해서 나온 것이 PyScript이며, 공식 사이트에서도 "Run python in your HTML"이라는 문구가 타이틀일 정도로 HTML에서 Python code를 작성할 수 있다는 것 자체로도 Python의 단점을 해결하고 장점을 더욱 극대화할 수 있는 기술이 바로 PyScript입니다.

## PyScript의 특징

Pyscript는 표준 HTML을 지원하며 아래와 같은 6가지의 특징을 가지고 있습니다.

- Python in the browser: Server나 plug-in을 사용하지 않아도 Python code를 HTML에서 실행할 수 있으며, 외부 파일과 py파일 호스팅 또한 지원합니다.
- Python ecosystem: 인기 있는 Python library와 science package를 지원합니다. (numpy, pandas, scikit-learn, Matplotlib, Folium, Altair, Panel, DeckGL 등)
- Python with JavaScript: Python과 JavaScript의 개체 및 네임스페이스 간의 양방향 통신을 지원합니다.
- Environment management: 개발자가 실행할 페이지 코드에 포함할 파일과 패키지를 정의할 수 있도록 있습니다.
- Visual application development: 개발자는 버튼 및 컨테이너, 텍스트 상자 등과 같이 쉽게 사용할 수 있는 큐레이션 된 UI 구성 요소를 사용하여 쉽게 빌드할 수 있습니다.
- Flexible framework: PyScript는 개발자가 Python에서 직접 연결이 가능하며 확장 가능한 새로운 구성 요소를 생성하고 공유할 수 있는 유연한 프레임워크입니다.

이렇듯 PyScript는 아래와 같이 주로 개발자가 개발하는 데 편의성과 확장이 더욱 용이한 여러 특징을 가지고 있습니다. 참고로 PyScript에서는 아직 다른 웹 브라우저에서 코드 동작에 약간의 차이가 있을 수 있어 Google Chrome 웹 브라우저에서의 테스트를 권장하고 있습니다만 직접 실행해본 결과 가볍게 테스트를 진행할 땐 Edge에서도 이상 없이 잘 동작하는 것을 확인했습니다. (REPL의 적용은 Chrome 권장)

## PyScript의 단점

공식 사이트에서 PyScript는 아직 매우 초기 단계며 개발할 부분이 많이 남아있다고 합니다. 그렇다 보니 아직 불안정한 부분을 Anaconda에서도 인지하고 있는데 이중 가장 치명적인 것은 페이지 로딩 시간이 오래 걸린다는 점입니다. 이 문제는 많은 변경이 필요할 것으로 예상되며 이 외에도 문제가 있어 PyScript가 완전해지기까지는 시간이 걸릴 것으로 예측됩니다. 그렇기에 Anaconda에서도 사람들이 탐구하고 직접 실행해보는 것은 권장하지만, 상업용으로는 사용하지 않는 것이 좋을 것이라며 권고하고 있습니다.

## **BunScript란?**

Bun은 자바스크립트 및 타입스크립트 앱을 위한 초고속 올인원 도구입니다. Bun의 장점은 개발 프로세스를 간소화하여 그 어느 때보다 원활하고 효율적으로 만들 수 있다는 점입니다. 이는 Bun이 단순한 런타임이 아니라 패키지 관리자, 번들러, 테스트 러너의 역할을 동시에 수행하기 때문에 가능합니다. JS 개발을 위한 스위스 군용 나이프가 있다고 상상해 보세요. 

2009년 Node.js의 등장은 획기적이었습니다. 하지만 많은 기술이 그렇듯 기술이 성장함에 따라 복잡성도 함께 증가했습니다. 도시라고 생각해 보세요. 도시가 커질수록 교통 혼잡이 문제가 될 수 있습니다.

Bun은 이러한 혼잡을 완화하여, 더 원활하고 빠르게 움직일 수 있는 새로운 인프라가 되는 것을 목표로 합니다. Bun은 기존의 것을 재창조하는 것이 아니라 개선함으로써 속도와 단순성을 확보하는 동시에, 자바스크립트의 독특하고 강력한 본질을 잃지 않도록 합니다.

Bun은 더 빠르고 간결하며 Node.js를 대체할 수 있는 더 현대적인 도구로 설계되었다고 했으니, 몇 가지 비교를 통해 진짜인지 살펴보겠습니다. 하지만 먼저 한 가지 다른 주제에 대해 논의해 보겠습니다.
