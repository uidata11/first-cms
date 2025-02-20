# github 팀 단위 프로젝트 주의사항

1. 팀장이 있어야 합니다.
   - main 브랜치 관리
   - 팀원들의 브랜치에서 수정/추가된 컴포넌트를 통합/취합 검토, 승인 (Merge)
2. 팀 별로 브랜치를 따로 만들어야 합니다.
   - 다른 컴포넌트를 작업합니다.
   - PR (Create Pull Request)
   - git pull origin main (합쳐진 최신 버전을 팀원들의 브랜치에 적용시키는 것)

## 프로젝트 학생 프로그램 (CMS)

1. 학생을 추가할 수 있습니다.

   - 이름
   - 주소
   - 생년월일
   - 연락처
   - 성별
   - 학생아이디

   - 예) 사람 : 이름, 나이, 연락처
   - const person = { name:'', age:0, num:'010', regi:'123'}

2. 학생들의 정보를 수정할 수 있습니다.

3. 학생들의 정보를 삭제할 수 있습니다.

###

1. 컨테이너를 생성합니다. (App)
2. useState 로 **학생들**을 관리할 상태를 생성합니다.
   3-1. 학생들에 담길 학생의 정보를 오브젝트 화 하여서 변수로 선언합니다.
   3-2. 컨테이너 스타일링
   **PropTypes 를 통해 Props-drilling하는 모든 것들을 정의하여서 받아옵니다.**
   4-1. 학생들의 아이템 이 어떻게 보이게 할지 고민하고 출력합니다. - 스타일링 - 수정, 삭제
   4-2. 학생 컴포넌트 스타일링
3. 학생들을 추가할 폼을 생성합니다.
4. 학생 한 명에 대한 정보를 관리할 변수를 useState로 관리합니다.
5. 학생 정보를 어떻게 변경하고 관리할지 기획
   8-1. 추가할 때의 로직을 설계합니다. - 문자열의 길이, 중복체크 - 편의성 추구 ++ (인풋창 포커스, 선택창 포커스 등)
   8-2. 폼 스타일링
6. 해당 폼을 추가 뿐만 아니라 수정할 때도 사용할 수 있도록 확장합니다.
7. 추가 로직 구현

# Container : 김영화

# ItemComponent : ---

# FormComponent : Main/ --- Sub/ ---

m1:ykh

## 해야할 일

1. 그릇의 이름 정하기

- 배열의 이름
- 복수형태로 지어야 단수형태의 이름이 자연스럽게 지어짐
- 예) fruits -> fruit, people -> person
- 안좋은예) fs->f

2. 컴포넌트의 이름 정하기

   - 컴포넌트가 수행하는 역활에 따라 이름을 짓기
   - 예) 추가하는 폼의 역활 -> AddForm
   - 예) 출력하는 아이템 -> FruitItem, PersonItem

3. 컴포넌트 만들 때 props-drilling으로 받아오는 값 이름 정하기

   - 예) 만드는 사람과 사용하는 사람이 공톡적으로 설계하는 것이 좋음 주도권은 설계자가 가짐
   - PropTypes 을 사용해서 받아올 값들의 타입 정하기 (필수)

4. 컴포넌트 안에서 선언하는 변수는 설계자 마음대로 작성 가능함

5. 컴포넌트 수행 내용을 작성한 RREADME.md 파일이 있으면 좋음

6.작업 내용을 정확하게 지시하는게 중요함
