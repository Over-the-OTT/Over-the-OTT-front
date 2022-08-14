import styled from 'styled-components';
import { ReactComponent as ModalBox } from '../../static/ModalBox.svg';
const LoginModal = props => {
	return (
		<ModalWrapper>
			<BoxWrapper>
				<MessageWrapper>
					<p>로그인 실패</p>
					<p>이메일과 비밀번호를 다시 한번 확인해 주세요</p>
					<DeleteModalBtn
						onClick={() => {
							props.setModal(false);
						}}
					>
						다시 로그인하기
					</DeleteModalBtn>
				</MessageWrapper>
				<ModalBox className='ModalBox' />
			</BoxWrapper>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	background: rgba(0, 0, 0, 0.5);
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	z-index: 7;
	animation: modal-show 0.5s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -10px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
`;
const BoxWrapper = styled.div`
	position: absolute;
	top: 36.29vh;
	width: 37.31vw;
	height: 33.81vh;
	.ModalBox {
		margin: 0;
		width: 100%;
		height: 100%;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
`;
const MessageWrapper = styled.div`
	position: absolute;
	z-index: 10;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	p:nth-child(1) {
		font-weight: 400;
		font-size: 0.93vw;
		margin: 10.36vh 0 0 0;
	}
	p:nth-child(2) {
		font-weight: 600;
		font-size: 1.3vw;
		margin-bottom: 5vh;
	}
`;
const DeleteModalBtn = styled.button`
	cursor: pointer;
	width: 10.3vw;
	height: 3.98vh;
	background: #d38189;
	border-radius: 1.27vw;
	border-style: none;
	color: white;
`;
export default LoginModal;
