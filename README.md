This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Практическое задание для соискателя
Реализовать веб-приложение "Кредитный калькулятор", который в зависимости от параметров введенных пользователем, а также заданных параметров кредита, рассчитывает аннуитетный график погашения кредита в виде таблицы:
Номер платежа - Месяц/Год  - Платеж по основному долгу -  Платеж по процентам - Остаток основного долга - Общая сумма платежа
Вводимые пользователем данные:
    • Сумма кредита - допустимые значения от 100 000 до 5 000 000
    • Срок кредита в месяцах - от 12 до 60
Параметры кредита (отображаются клиенту, но недоступны для изменения):
    • годовая процентная ставка в % - от 12.9% до 23.9%

Формулы для расчета

Рассчитать месячный аннуитетный платеж можно по следующей формуле:
 где
x – месячный платёж, S – первоначальная сумма кредита, P – (1/12) процентной ставки в абсолютной величине, т.е. при 14.9% годовых ставка будет 0.149/12, N – количество месяцев.  
Для расчета процентной составляющей аннуитетного платежа, нужно остаток кредита на указанный период умножить на годовую процентную ставку и всё это поделить на 12 (количество месяцев в году).
, где pn – начисленные проценты, Sn – остаток задолженности на период, P - годовая процентная ставка по кредиту
В первый месяц остаток задолженности = сумме кредита.
Чтобы определить часть, идущую на погашение долга, необходимо из месячного платежа вычесть начисленные проценты. 
s = x – pn, где s – часть выплаты, идущая на погашение долга, x – месячный платёж, — начисленные проценты, на момент n-ой выплаты
В расчетах необходимо использовать округление к ближайшему целому до двух знаков после запятой.
