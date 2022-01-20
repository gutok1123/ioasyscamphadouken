# ioasyscamphadouken

Nesta implementação trabalhei com a ideia de guaradar log's pra ter um controle de fluxo dos erros, implementei um array como estrura básica para me basear nos erros
de validação de dados, usando a função isEmpty(value) do arquivo until.js que retorna true sempre que o campo está vazio, chamei essa função para cada elemento
do objeto user , dessa forma, o array guardava um true(dado vazio) ou um false(dado preenchido) em cada posição do array de registro de erros.

Desta forma usando um recurso nativo javascript o find, toda vez que obtiver umt true , seja ele em qualquer posição do array log, significa que temos um erro de validação
Desta forma na função verify eu verifico se tem um true neste array , caso não tenha verifico se a senha e e-mail são validos e só assim retorna-se a exibição de usuário valido,
caso contrário temos a exibição de cada erro de forma individual sendo impresso na ordem.
