import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/Reducers/filtro'
import * as S from './styles'

import { Botao, Campo } from '../../styles'

import * as enums from '../../Utils/enums/Tarefa'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                criterio="status"
                legenda="concluídas"
                valor={enums.Status.CONCLUIDO}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="urgentes"
                valor={enums.Prioridade.URGENTE}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="importantes"
                valor={enums.Prioridade.IMPORTANTE}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="normal"
                valor={enums.Prioridade.NORMAL}
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
