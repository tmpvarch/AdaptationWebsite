import { Toolbar, SaveButton } from 'react-admin';
import { UdvCyan, UdvDarkCyan } from '../css/Colors';
import '../css/Common.css'

export const UdvSaveToolBar = () => (
    <Toolbar>
        <SaveButton className='udv-save-button' label="Сохранить" 
            sx={{
                color: UdvDarkCyan, 
                backgroundColor: 'white',
                borderColor: UdvDarkCyan,
                textTransform: 'none', 
                fontFamily: 'Golos, Helvetica, Arial, sans-serif',
                ':hover': {
                    backgroundColor: UdvCyan,
                    color: 'black',
                  },
            }}
            icon={<></>}/>
    </Toolbar>
);
