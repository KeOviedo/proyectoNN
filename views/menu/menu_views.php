<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<aside class="main-sidebar sidebar-dark-primary elevation-4" id="menuVertical">
  <!-- Brand Logo -->
  <a href="crear_caso.php" class="brand-link">
    <img src="../resource/img/Logo-SICO-2.png" style="background:#ffffff;" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">SICO</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Menu desplegable  -->
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-ambulance"></i>
            <p>
              Referencia
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview">
            <?php

            $elROL = $_SESSION['rol'];
            $ese_ips = $_SESSION['ese_ips'];
            $identificacion = $_SESSION['id_usuario'];
            if ($elROL == 'IPS') { 
              if($identificacion!='78'){ ?> 
                <li class="nav-item">
                  <a href="./crear_caso.php" class="nav-link">
                    <i class="nav-icon fas fa-clipboard"></i>
                    <p>Crear Caso</p>
                  </a>
                </li>
              <?php } ?>


              <li class="nav-item">
                <a href="./revisar_caso.php" class="nav-link">
                  <i class="nav-icon fas fa-tasks"></i>
                  <p>Revisar Caso</p>
                </a>
              </li>
              <?php if($ese_ips!=''){ ?> 
                <li class="nav-item">
                  <a href="./revisar_casos_total_ese.php" class="nav-link">
                    <i class="fas fa-search nav-icon"></i> 
                    <p>Total Casos ESE</p>
                  </a>
                </li> 
              <?php } ?>
              <li class="nav-item">
                <a href="./panel_traslado.php" class="nav-link">
                  <i class="nav-icon fa fa-external-link"></i>
                  <p>Panel traslado</p>
                </a>
              </li>

              <?php if($identificacion=='78'){ ?> 
                <li class="nav-item">  
                  <a href="./reportes.php" class="nav-link"> 
                    <i class="nav-icon fas fa-tasks"></i>
                    <p>Reportes</p>
                  </a>
                </li>  
                
              <?php } ?>

            <?php }
            if ($elROL == "Referencia") {
            ?>
              <li class="nav-item">
                <a href="./crear_caso.php" class="nav-link">
                  <i class="nav-icon fas fa-clipboard"></i>
                  <p>Crear Caso</p>
                </a>
              </li>


              <li class="nav-item">
                <a href="./revisar_caso.php" class="nav-link">
                  <i class="nav-icon fas fa-tasks"></i>
                  <p>Revisar Caso</p>
                </a>
              </li>
            <?php
            }
            if ($elROL == "Root") {
            ?>
              <li class="nav-item">
                <a href="./crear_caso.php" class="nav-link">
                  <i class="nav-icon fa fa-clipboard"></i>
                  <p>Crear Caso</p>
                </a>
              </li>


              <li class="nav-item">
                <a href="./revisar_caso.php" class="nav-link">
                  <i class="nav-icon fas fa-tasks"></i>
                  <p>Revisar Caso</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./revisar_casos_total.php" class="nav-link">
                  <i class="fas fa-search nav-icon"></i>
                  <p>Total Casos</p>
                </a>
              </li>
              <?php if($identificacion=='1085666'){ ?>
                <li class="nav-item">
                <a href="./revisar_casos_total_ese.php" class="nav-link">
                  <i class="fas fa-search nav-icon"></i> 
                  <p>Total Casos ESE</p>
                </a>
              </li>
              <?php } ?>
              <li class="nav-item">
                <a href="./panel_traslado.php" class="nav-link">
                  <i class="nav-icon fas fa-ambulance"></i>
                  <p>Panel traslado</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./estados_traslados.php" class="nav-link">
                  <!-- <i class="nav-icon fas fa-alert <i class="fa-solid fa-triangle-exclamation"></i>" style="color:red"></i> -->
                  <!-- <i class="fas fa-triangle-exclamation"></i> -->
                  <i class="nav-icon fas fa-exclamation" style="color:orange"></i>
                  <p>Estados traslados</p>
                </a>
              </li>


              <li class="nav-item">
                <a href="./revisar_contra_referencia.php" class="nav-link">
                  <i class="nav-icon fas fa-history"></i>
                  <p>Revisar Contrarreferencia</p>
                </a>
              </li>



          </ul>
        </li>

        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-heartbeat"></i>
            <p>
              Cr&oacute;nicos
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./agendamiento_cronico.php" class="nav-link">
                <i class="nav-icon fas fa-calendar"></i>
                <p>Agendamientos Cr&oacute;nicos</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="./revisar_cronico.php" class="nav-link">
                <i class="fas fa-search nav-icon"></i>
                <p>Revisar Cr&oacute;nicos</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./revisar_cronico_total.php" class="nav-link"> 
                <i class="fas fa-search nav-icon"></i>
                <p>Total Cr&oacute;nicos</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./cronicos_finalizados.php" class="nav-link">
                <i class="fas fa-search nav-icon"></i>
                <p>Traslados Finalizados</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active"> 
            <i class="nav-icon fa fa-clipboard"></i> 
            <p>Crear Generales <i class="right fas fa-angle-left"></i> </p>
          </a>

          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./crear_generales.php" class="nav-link">
                <i class="nav-icon fas fa-calendar"></i>
                <p>Crear generales</p>
              </a>
            </li>
            <?php if($identificacion=='1085666' or $identificacion=='2' or $identificacion=='3'  or $identificacion=='60' ){ ?>
            <li class="nav-item">
              <a href="./revisar_ips.php" class="nav-link"> 
                <i class="nav-icon fas fa-tasks"></i>
                <p>Actualizar Ips</p>
              </a>
            </li>
            <?php } ?>
			 <?php if($identificacion=='1085666' or $identificacion=='2' or $identificacion=='3'  or $identificacion=='60' or $identificacion =='73' or $identificacion=='74'){ ?>
            <li class="nav-item">
              <a href="./reportes.php" class="nav-link"> 
                <i class="nav-icon fas fa-tasks"></i>
                <p>Reportes</p>
              </a>
            </li>
            <?php } ?>
			<?php if($identificacion=='1085666' or $identificacion=='2' or $identificacion=='3'  or $identificacion=='60' or $identificacion =='73'){ ?>
            <li class="nav-item">
              <a href="./dashboard_traslados.php" class="nav-link"> 
                <i class="nav-icon fas fa-tasks"></i>
                <p>DB. Traslados</p>
              </a>
            </li>
            <?php } ?>
			<?php if($identificacion=='1085666' or $identificacion=='2' or $identificacion=='3'  or $identificacion=='60' or $identificacion =='73' ){ ?>
            <li class="nav-item">
              <a href="./dashboard_referencia.php" class="nav-link"> 
                <i class="nav-icon fas fa-tasks"></i>
                <p>DB. Referencia</p>
              </a>
            </li>
            <?php } ?>
			<?php if($identificacion=='1085666' or $identificacion=='2' or $identificacion=='3'  or $identificacion=='60' or $identificacion =='73' ){ ?>
            <li class="nav-item">
              <a href="./dashboard_tras_ref.php" class="nav-link"> 
                <i class="nav-icon fas fa-tasks"></i>
                <p>DB. Ref-Trans.</p>
              </a>
            </li>
            <?php } ?>
          </ul>

        </li>

        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-heartbeat"></i>
            <p>
              Caso SEM
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>

          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./crear_caso_sem2.php" class="nav-link">
                <i class="nav-icon fas fa-calendar"></i>
                <p>Crear Caso SEM</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./revisar_caso_sem.php" class="nav-link">
                <i class="nav-icon fas fa-tasks"></i>
                <p>Revisar Caso SEM</p>
              </a>
            </li>
          </ul>
        </li>

      <?php
            }
      ?>


      <!--  LOGOUT -->
      <li class="nav-item">
      <li class="nav-item">
        <a href="menu/finalizar_sesion.php" class="nav-link">
          <!-- <i class="nav-icon fas fa-clipboard"></i> -->
          <i class="fas fa-sign-out-alt"></i>
          <!-- <i class="nav-icon fas fa-book-heart"></i> -->
          <p>Logout</p>
        </a>
      </li>
      </li>
      <!-- /LOGOUT -->

      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>